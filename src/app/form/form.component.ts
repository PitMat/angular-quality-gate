import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddService} from '../services/add.service';
import {Country} from '../models/country';
import {SightseeingPoint} from '../models/sightseeing-point';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() getObjects: any;
  SightObject!: SightseeingPoint;
  Add: FormGroup;
  id = '';
  DDLatRegex = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  DDLngRegex = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  submitted = false;

  constructor(private addService: AddService, private route: ActivatedRoute,
              private router: Router) {
    this.Add = new FormGroup({
      name: new FormControl('', Validators.required),
      lng: new FormControl('', [Validators.required, Validators.pattern(this.DDLngRegex)]),
      lat: new FormControl('', [Validators.required, Validators.pattern(this.DDLatRegex)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      color: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)])
    });
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
  }

  showError(controlName: string, errorName: string): boolean {
    return this.Add.get(controlName)?.touched && this.Add.get(controlName)?.errors?.[errorName];
  }

  Save(): void {
    this.addService.getObjects().subscribe(sights => {
      console.log({...this.Add.value, id: sights.length + 1, country: {...new Country('POLAND', 'PL')}});
      this.addService.addObject({...this.Add.value, id: sights.length + 1}).subscribe(() => {
        this.submitted = true;
        alert('Object Added!');
      });
    });
  }
}
