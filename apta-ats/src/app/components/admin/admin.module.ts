import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRouterModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from 'src/app/material-module';

@NgModule({
    declarations: [
        DashboardComponent,
        AdminComponent
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
