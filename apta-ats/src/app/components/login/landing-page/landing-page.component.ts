import { Router } from '@angular/router';
import { DataShareService } from '../../../data-share.service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  feedback = false;
  constructor(config: NgbCarouselConfig,
              private modalService: NgbModal,
              private dataShare: DataShareService,
              private router: Router) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.dataShare.dataSubject.next('');
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  signInPage() {
    sessionStorage.setItem('feedback', 'true');
    this.dataShare.dataSubject.next(false);
    this.router.navigate(['./login/signIn']);
  }
}
