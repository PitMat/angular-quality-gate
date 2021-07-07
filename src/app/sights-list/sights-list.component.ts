import {Component, OnInit} from '@angular/core';
import {SightsService} from '../services/sights.service';
import {SightseeingPoint} from '../models/sightseeing-point';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {
  sights: SightseeingPoint[];
  closeResults  = '';

  constructor(private sightsService: SightsService, private modalService: NgbModal) {
  }

  showDetails(content: any): void {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResults = `Close with ${result}`;
  }, reason => {
    this.closeResults = `Dissmised${this.getDismissReason(reason)}`;
  });
  }

  getDismissReason(reason: ModalDismissReasons): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case  ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }
}
