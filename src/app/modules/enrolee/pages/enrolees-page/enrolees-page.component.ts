import { Component, OnInit } from '@angular/core';
import { EnroleeService } from '../../services/enrolee';
import { Enrolee } from '../../interfaces/enrolee.interfaces'

@Component({
  selector: 'app-enrolees-page',
  templateUrl: './enrolees-page.component.html',
  styleUrls: ['./enrolees-page.component.less']
})
export class EnroleesPageComponent implements OnInit {
  public enroleeList: Enrolee[];
  constructor(private enroleeService: EnroleeService) { }

  ngOnInit() {
    this.enroleeService.getEnroleeList().subscribe(data => {
        this.enroleeList = data;
    },
    error=> {
      this.enroleeService.getEnroleeListHardCoded().subscribe(data => {
          this.enroleeList = data;
      });
    });
  }

}
