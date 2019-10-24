import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import * as $AB from 'jquery';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  names = ['Name_1', 'Name_1', 'Name_1', 'Name_1', 'Name_1'];
  Reviews = ['Name_1', 'Name_2', 'Name_3'];
  viewResume = '';
  openReport = true;
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  // openModal() {
  //   $AB('#exampleModal').modal('show');
  //   }
}
