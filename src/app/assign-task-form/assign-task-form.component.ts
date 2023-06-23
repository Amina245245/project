import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-task-form',
  templateUrl: './assign-task-form.component.html',
  styleUrls: ['./assign-task-form.component.css']
})
export class AssignTaskFormComponent {

  projectName: string;
  projectDescription: string;
 employeeId:string;
  submitForm(): void {
    // Perform form validation and submit data to the server
    // Reset form fields after submission
    this.projectName = '';
    this.projectDescription = '';
    this.employeeId='';

    
  }

}
