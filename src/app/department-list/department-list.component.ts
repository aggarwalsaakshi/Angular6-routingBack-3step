import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent  {
  constructor(private router: Router) { }
departments=[
{"id":1, "name":"Angular"},
{"id":2, "name":"Java"},
{"id":3, "name":"Ruby"},
{"id":4, "name":"Node"}
];
  
 public onSelect(department){
  this.router.navigate(['/departments',department.id]);
  }

}
