import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 const routes : Routes = [
 {
	path: '', component: DepartmentListComponent
},
{
	path: 'employee', component: EmployeeListComponent
},
{
	path: 'department', component: DepartmentListComponent
},
{
	path: 'departments/:id', component: DepartmentDetailComponent
},
{
	path: '**', component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,EmployeeListComponent,DepartmentDetailComponent,PageNotFoundComponent]