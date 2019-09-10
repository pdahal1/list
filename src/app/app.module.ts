import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { KathmandulistService } from './kathmandulist.service';
import { AddStudentComponent } from './add-student/add-student.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MatCardModule } from '@angular/material/card'; 
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoSkuComponent } from './demo-sku/demo-sku.component';

 

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    InputOutputComponent,
    ChildComponentComponent,
    DemoSkuComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule, 
    MatCardModule, 
    FormsModule, 
    ReactiveFormsModule, 
    
    
    
    
  ],
  providers: [KathmandulistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
