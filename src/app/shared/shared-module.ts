import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumsComponent } from '../components/breadcrums/breadcrums.component';
import { ButtonTable } from '../components/button-table/button-table.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { SearchTable } from '../components/search-table/search-table.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { StatusSection } from '../components/status-section/status-section';
import { TableUntitledComponent } from '../components/table-untitled/table-untitled.component';
import { CalendarInputComponent } from '../components/forms/fields/calendar-input/calendar-input';
import { CheckboxInputComponent } from '../components/forms/fields/checkbox-input/checkbox-input';
import { FileInputComponent } from '../components/forms/fields/file-input/file-input';
import { SelectInputComponent } from '../components/forms/fields/select-input/select-input';
import { TextInputComponent } from '../components/forms/fields/text-input/text-input';
import { TextAreaInputComponent } from '../components/forms/fields/textarea-input/textarea-input';
import { ToggleInputComponent } from '../components/forms/fields/toggle-input/toggle-input';
import { DynamicFormComponent } from '../components/forms/dynamic-form.component';
import { DashboardLayoutComponent } from '../layouts/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, FileIcon } from 'lucide-angular';

const allSharedComponents = [
  BreadcrumsComponent,
  ButtonTable,
  FooterComponent,
  HeaderComponent,
  PaginationComponent,
  SearchTable,
  SidebarComponent,
  StatusSection,
  TableUntitledComponent,
  // ===== Form =====
  CalendarInputComponent,
  CheckboxInputComponent,
  FileInputComponent,
  SelectInputComponent,
  TextInputComponent,
  TextAreaInputComponent,
  ToggleInputComponent,
  DynamicFormComponent,
  // ===== Dashboard Layout =====
  DashboardLayoutComponent
]

const SharedModuleToExport = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  LucideAngularModule
]

@NgModule({
  declarations: [...allSharedComponents],
  imports: [
    ...SharedModuleToExport,
    LucideAngularModule.pick({ FileIcon })
  ],
  exports: [
    ...allSharedComponents,
    ...SharedModuleToExport
  ]
})
export class SharedModule { }
