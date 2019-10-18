import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRouterModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminMailComponent } from './admin-mail/admin-mail.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminSubscriptionComponent } from './admin-subscription/admin-subscription.component';
import { AdminVisitorsComponent } from './admin-visitors/admin-visitors.component';
import {DemoMaterialModule} from '../../material-module';

@NgModule({
    declarations: [
        DashboardComponent,
        AdminComponent,
        AdminHomeComponent,
        AdminSettingsComponent,
        AdminFeedbackComponent,
        AdminMailComponent,
        AdminTemplateComponent,
        AdminUsersComponent,
        AdminProfileComponent,
        AdminSubscriptionComponent,
        AdminVisitorsComponent
    ],
    imports: [
        CommonModule,
        AdminRouterModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        DemoMaterialModule,
    ],
    providers: [DatePipe]
})

export class AdminModule {}
