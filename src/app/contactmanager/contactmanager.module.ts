import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ContactManagerAppComponent,
    children: [{ path: '', component: MainContentComponent }],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ContactmanagerModule {}
