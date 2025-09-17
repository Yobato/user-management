import { Component, Input } from '@angular/core';

export interface StatusData{
  title: string;
  statusValue?: string | null;
  statusLabel?: string;
  reasonValue?: string | null;
  reasonLabel?: string;
}


@Component({
  selector: 'app-status-section',
  standalone: false,
  templateUrl: './status-section.html',
  styleUrl: './status-section.css'
})

export class StatusSection {
  @Input() data!: StatusData;

}
