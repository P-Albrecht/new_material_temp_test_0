import { NgModule } from '@angular/core';
import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ResizableModule } from 'angular-resizable-element';
import { NotificationsComponent } from '../../../src/app/notifications/notifications.component';
import { UserProfileComponent } from '../../../src/app/user-profile/user-profile.component';
import { FooterComponent } from '../../../src/app/components/footer/footer.component';
import { NavbarComponent } from '../../../src/app/components/navbar/navbar.component';
import { TableListComponent } from '../../../src/app/table-list/table-list.component';
import { TypographyComponent } from '../../../src/app/typography/typography.component';
import { DashboardComponent } from '../../../src/app/dashboard/dashboard.component';
import { UpgradeComponent } from '../../../src/app/upgrade/upgrade.component';
import { IconsComponent } from '../../../src/app/icons/icons.component';
import { MapsComponent } from '../../../src/app/maps/maps.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    EnviromentComponent,
    NotificationsComponent,
    UserProfileComponent,
    FooterComponent,
    NavbarComponent,
    TableListComponent,
    TypographyComponent,
    DashboardComponent,
    UpgradeComponent,
    IconsComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule, 
    ResizableModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [
    EnviromentComponent,
  ],
  providers: [
  ],
  bootstrap: [
  ]
})
export class EnviromentModule { }
