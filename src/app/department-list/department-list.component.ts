import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit  {
public selectedId;
  constructor(private route: ActivatedRoute, private router: Router) { }
   ngOnInit() {
   this.route.params.subscribe((params: Params)=>{
   let id=parseInt(params['id']);
 this.selectedId= id;
   })
   }
departments=[
{"id":1, "name":"Angular"},
{"id":2, "name":"Java"},
{"id":3, "name":"Ruby"},
{"id":4, "name":"Node"}
];
  
  onSelect(department){
  this.router.navigate(['/departments', department.id]);
  }

isSelected(department)
{
	return (department.id=== this.selectedId);
}
}
