import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Enrolee } from '../../interfaces/enrolee.interfaces';
import { EnroleeService } from '../../services/enrolee';

@Component({
    selector: 'app-enrolee-list',
    templateUrl: './enrolee-list.component.html',
    styleUrls: ['./enrolee-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnroleeListComponent {
    @Input() public enroleeListData: Enrolee[];

    constructor(private enroleeService: EnroleeService) {}

    public showEmployeeDetails(id: number) {
        this.enroleeService.getEnroleeDetails(id.toString());
        this.enroleeService.getEnroleeDetailsHardCoded(id.toString());
    }
}
