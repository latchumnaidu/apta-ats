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
            {path: 'dashBoard', component: DashboardComponent}
        ]
    }

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRouterModule {}
