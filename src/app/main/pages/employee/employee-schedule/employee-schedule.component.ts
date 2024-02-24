import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';

@Component({
  selector: 'app-employee-schedule',
  templateUrl: './employee-schedule.component.html',
  styleUrl: './employee-schedule.component.scss',
})
export class EmployeeScheduleComponent {
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Epilation du maillot avec Mme Julie DuGradin',
      start: setHours(setMinutes(new Date(), 0), 14),
      end: setHours(setMinutes(new Date(), 0), 15),
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
    },
  ];
}
