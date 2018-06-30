import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
public dapartmentId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  let id = this.route.snapshot.params['id'];
  this.dapartmentId=id;;
  }

}
