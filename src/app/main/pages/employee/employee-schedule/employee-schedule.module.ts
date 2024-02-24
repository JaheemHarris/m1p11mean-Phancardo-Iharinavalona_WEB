import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeScheduleComponent } from './employee-schedule.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ContainerComponent } from '@/app/main/layouts/container/container.component';

@NgModule({
  declarations: [EmployeeScheduleComponent],
  imports: [
    CommonModule,
    ContainerComponent,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [EmployeeScheduleComponent],
})
export class EmployeeScheduleModule {}
