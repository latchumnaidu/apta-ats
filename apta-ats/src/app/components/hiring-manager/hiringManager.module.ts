import { HiringManagerComponent } from './hiring-manager.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';
import { HiringManagerRoutingModule } from './hiringmanager-routing.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
    declarations: [
        HiringManagerComponent,
        UpdateProfileComponent
    ],
    imports: [
        CommonModule,
        HiringManagerRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        DemoMaterialModule,
    ]
})
export class HiringManagerModule {}
