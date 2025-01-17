import {Component, OnInit} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {SightsService} from '../services/sights.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {SightDetailsComponent} from '../sight-details-module/sight-details/sight-details.component';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {

  sights: SightseeingPoint[];
  currentSight: SightseeingPoint;

  constructor(private sightsService: SightsService,  private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
   this.getAllPoints();
  }

  getAllPoints(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }

  showDetails(sight: SightseeingPoint): void {
    const modalRef = this.modalService.open(SightDetailsComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.currentSight = sight;

  }

  edit(id: string): boolean {
    this.router.navigate([`edit/:${id}`]).catch(console.error);
    return false;
  }

  delete(sight: SightseeingPoint): void {
    this.sightsService.delete(sight.id).subscribe();
    this.getAllPoints();
  }
}
