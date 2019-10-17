import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecruitersComponent } from './add-recruiters.component';

describe('AddRecruitersComponent', () => {
  let component: AddRecruitersComponent;
  let fixture: ComponentFixture<AddRecruitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecruitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecruitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
