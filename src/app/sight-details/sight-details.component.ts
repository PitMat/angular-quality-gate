import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {SightseeingPoint} from '../models/sightseeing-point';


@Component({
  selector: 'app-sight-details',
  templateUrl: './sight-details.component.html',
  styleUrls: ['./sight-details.component.scss']
})
export class SightDetailsComponent implements OnInit {
  sight: SightseeingPoint;
  currentSight: SightseeingPoint;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}