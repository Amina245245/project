import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-project-form',
  templateUrl: './delete-project-form.component.html',
  styleUrls: ['./delete-project-form.component.css']
})
export class DeleteProjectFormComponent {

  projectName: string;
  projectDescription: string;

  submitForm(): void {
    // Perform form validation and submit data to the server
    // Reset form fields after submission
    this.projectName = '';
    this.projectDescription = '';

    
  }

  

}
