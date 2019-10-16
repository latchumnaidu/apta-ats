import { AdminVisitorsComponent } from './admin-visitors/admin-visitors.component';
import { AdminSubscriptionComponent } from './admin-subscription/admin-subscription.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminMailComponent } from './admin-mail/admin-mail.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            {path: '', redirectTo: 'dashBoard', pathMatch: 'full'},
            {path: '***', redirectTo: 'dashBoard', pathMatch: 'full'},
            {path: 'dashBoard', component: DashboardComponent},
            {path: 'home', component: AdminHomeComponent},
            {path: 'feedback', component: AdminFeedbackComponent},
            {path: 'settings', component: AdminSettingsComponent},
            {path: 'mail', component: AdminMailComponent },
            {path: 'template', component: AdminTemplateComponent },
            {path: 'users', component: AdminUsersComponent },
            {path: 'profile', component:  AdminProfileComponent},
            {path: 'subscription', component:  AdminSubscriptionComponent},
            {path: 'visitors', component:  AdminVisitorsComponent},
        ]
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRouterModule {}
