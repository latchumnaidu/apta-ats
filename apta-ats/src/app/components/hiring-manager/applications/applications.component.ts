import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import * as $AB from 'jquery';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  names = ['Name_1', 'Name_1', 'Name_1', 'Name_1', 'Name_1'];
  Reviews = ['Name_1', 'Name_2', 'Name_3'];
  viewResume = '';
  openReport = false;
  spinner = false;
  public Editor = ClassicEditor;
  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  openVerticallyCentered(content) {
    this.modalService.open(content);
  }
  sendInvitation(content) {
    this.modalService.open(content , {size: 'lg'});
  }
  // openModal() {
  //   $AB('#exampleModal').modal('show');
  //   }
  chatBox() {
    this.router.navigate(['./hiring-manager/chat-box']);
  }
}
