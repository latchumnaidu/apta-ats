import { DataShareService } from './../../../data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackType = 'Bug';
  constructor(
    private dataShare: DataShareService
  ) { }

  ngOnInit() {
    this.dataShare.dataSubject.next('feedback');
  }

}
