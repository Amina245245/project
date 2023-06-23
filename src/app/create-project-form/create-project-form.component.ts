import { Component } from '@angular/core';

@Component({
  selector: 'app-create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.css']
})
export class CreateProjectFormComponent {
protectId:string;
  projectName: string;
  projectDescription: string;

  submitForm(): void {
    // Perform form validation and submit data to the server
    // Reset form fields after submission
    this.projectName = '';
    this.projectDescription = '';

    
  }

  

}
