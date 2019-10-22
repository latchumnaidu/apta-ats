import { HiringManagerComponent } from './hiring-manager.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';
import { HiringManagerRoutingModule } from './hiringmanager-routing.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { AddRecruitersComponent } from './recruiters/add-recruiters/add-recruiters.component';
import { AllRecruitersComponent } from './recruiters/all-recruiters/all-recruiters.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AgmCoreModule } from '@agm/core';
import { InboxComponent } from './inbox/inbox.component';
import { TemplateComponent } from './template/template.component';
import { InternalSearchComponent } from './internal-search/internal-search.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
@NgModule({
    declarations: [
        HiringManagerComponent,
        UpdateProfileComponent,
        DashboardComponent,
        RecruitersComponent,
        AddRecruitersComponent,
        AllRecruitersComponent,
        ContactUsComponent,
        InboxComponent,
        TemplateComponent,
        InternalSearchComponent,
        FeedbackPageComponent,
        SettingsComponent,
        ProfileComponent,
        JobsComponent
    ],
    imports: [
        CommonModule,
        HiringManagerRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        DemoMaterialModule,
        AgmCoreModule.forRoot({
            apiKey: ''
          })
    ]
})
export class HiringManagerModule {}
