import { Component, OnInit } from "@angular/core";
import { BreadcrumsComponent } from "../../components/breadcrums/breadcrums.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    BreadcrumsComponent
  ]
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }
}
