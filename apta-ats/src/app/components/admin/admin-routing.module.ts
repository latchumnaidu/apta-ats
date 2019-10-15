import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
        ]
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRouterModule {}
