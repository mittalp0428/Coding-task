import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnroleeService } from '../../services/enrolee';
import { Enrolee } from '../../interfaces/enrolee.interfaces';

@Component({
  selector: 'app-enrolee-details',
  templateUrl: './enrolee-details.component.html',
  styleUrls: ['./enrolee-details.component.less']
})
export class EnroleeDetailsComponent implements OnInit {

  public enroleeDetail: Enrolee;

  constructor(private enroleeService: EnroleeService) {}

  statusChangeHandler(evt, enrolee) {
    enrolee.active = evt.target.checked;
    //need to put spinner
    this.enroleeService.saveEnroleeDetails(enrolee.id, enrolee).subscribe(data => {
        console.log('updated successfully');
        // need to do data sync with the grid
    },
    error=> {
      console.log('There is an error on update. Contact Administrator!!!');
    });
  }

  nameChangeHandler(evt, enrolee) {
    enrolee.name = evt.target.value;
    this.enroleeService.saveEnroleeDetails(enrolee.id, enrolee).subscribe(data => {
        console.log('updated successfully');
        // need to do data sync with the grid
    },
    error=> {
      console.log('There is an error on update. Contact Administrator!!!');
    });
  }

  public ngOnInit() {
      this.enroleeService.enroleeDetailSubject$.subscribe(realObservableData => {
          if (realObservableData) {
            realObservableData.subscribe(val => {
              this.enroleeDetail = realObservableData;
            },
            err=> {
              this.enroleeService.empDetailSubject$.subscribe(hardCordedData => {
                  this.enroleeDetail = hardCordedData;
              });
            });
          }
      });
  }

}
