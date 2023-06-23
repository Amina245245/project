import { Component } from '@angular/core';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css']
})
export class UpdateProjectFormComponent {
  projectName: string;
  projectDescription: string;

  submitForm(): void {
    // Perform form validation and submit data to the server
    // Reset form fields after submission
    this.projectName = '';
    this.projectDescription = '';

    
  }

}
