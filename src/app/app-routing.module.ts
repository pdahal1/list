import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DemoSkuComponent } from './demo-sku/demo-sku.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'child-component', component: ChildComponentComponent}, 
  { path: 'add-student', component:AddStudentComponent },
  {path: 'demo-sku', component: DemoSkuComponent},
  { path: 'input-output', component:InputOutputComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
