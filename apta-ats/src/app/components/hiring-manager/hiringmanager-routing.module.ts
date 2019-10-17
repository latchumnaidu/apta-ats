import { AllRecruitersComponent } from './recruiters/all-recruiters/all-recruiters.component';
import { AddRecruitersComponent } from './recruiters/add-recruiters/add-recruiters.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HiringManagerComponent } from './hiring-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes  = [
    {path: '', component: HiringManagerComponent, children: [
        {path: 'update-profile', component: UpdateProfileComponent},
        {path: '', redirectTo : 'update-profile', pathMatch: 'full' },
        {path: 'dashboard', component: DashboardComponent},
        {path: 'recruiters', component: RecruitersComponent,
        children: [
            {path: 'add', component: AddRecruitersComponent},
            {path: 'view', component: AllRecruitersComponent},
            {path: '', redirectTo: 'view', pathMatch: 'full'}
        ]},
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HiringManagerRoutingModule {}
