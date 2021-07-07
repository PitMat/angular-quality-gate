import {Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddService} from '../../services/add.service';
import {SightseeingPoint} from '../../models/sightseeing-point';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() getObjects: any;
  SightObject!: SightseeingPoint;
  form: FormGroup;
  id = '';
  DDLatRegex = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  DDLngRegex = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  submitted = false;

  constructor(private addService: AddService, private route: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      longitude: new FormControl('', [Validators.required, Validators.pattern(this.DDLngRegex)]),
      latitude: new FormControl('', [Validators.required, Validators.pattern(this.DDLatRegex)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      color: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3)])
    });
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  showError(controlName: string, errorName: string): boolean {
    return this.form.get(controlName)?.touched && this.form.get(controlName)?.errors?.[errorName];
  }

  save(): void {
    this.addService.getPoints().subscribe(sights => {
      this.addService.addPoint({...this.form.value, id: sights.length + 1}).subscribe(() => {
        this.submitted = true;
        alert('Point was added');
      });
    });
  }

}
