import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from '../../shared/model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  error: string;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  findDistinctEmployeesByCriteria(criteria: string) {
    this.employeeService.findDistinctEmployeesByCriteria(criteria).subscribe(res => {
      this.employees = res;
    }, (response) => {
      this.error = 'ERROR';
    });
  }

}
