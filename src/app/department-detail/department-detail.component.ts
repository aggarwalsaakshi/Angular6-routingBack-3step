import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';	
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent  implements OnInit   {
public dapartmentId;
  constructor(private route: ActivatedRoute , private router: Router) { }
  ngOnInit() {
   this.route.params.subscribe((params:Params)=>{
   let id=parseInt(params['id']);
 this.dapartmentId=id;
   })
   }

getPrevious()
{

	let previousId=parseInt(this.dapartmentId)-1;
	this.router.navigate(['/departments',previousId]);
}
getNext(){	
	let nextId=parseInt(this.dapartmentId)+1;
	this.router.navigate(['/departments',nextId]);
	}

goDepartments(){
	let selectedId = parseInt(this.dapartmentId) ? parseInt(this.dapartmentId):null;
	this.router.navigate(['/department',{id: selectedId; random :"random"}]);
}
}
