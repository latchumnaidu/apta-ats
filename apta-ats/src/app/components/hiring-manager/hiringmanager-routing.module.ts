import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { HiringManagerComponent } from './hiring-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes  = [
    {path: '', component: HiringManagerComponent, children: [
        {path: 'update-profile', component: UpdateProfileComponent},
        {path: '', redirectTo : 'update-profile', pathMatch: 'full' }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HiringManagerRoutingModule {}
