import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  projectName: string;
  taskDescription: string;


  submitForm(): void {
    // Perform form validation and submit data to the server
    // Reset form fields after submission
    this.projectName = '';
    this.taskDescription = '';

    
  }

}
