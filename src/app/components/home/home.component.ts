import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = [
    {
      id: 1,
      title: 'Login Page Design',
      description: 'Design a login page for the application',
      status: 'To Do'
    },
    {
      id: 2,
      title: 'User Authentication',
      description: 'Implement user authentication system',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Database Schema',
      description: 'Create database schema for user data',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'API Endpoints',
      description: 'Develop REST API endpoints',
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Mobile Responsiveness',
      description: 'Ensure website works on mobile devices',
      status: 'To Do'
    },
    {
      id: 6,
      title: 'Unit Testing',
      description: 'Write unit tests for core functionality',
      status: 'To Do'
    },
    {
      id: 7,
      title: 'Deployment Setup',
      description: 'Configure CI/CD pipeline',
      status: 'In Progress'
    },
    {
      id: 8,
      title: 'Logo Design',
      description: 'Create company logo',
      status: 'Completed'
    },
    {
      id: 9,
      title: 'Performance Optimization',
      description: 'Optimize page load times',
      status: 'To Do'
    },
    {
      id: 10,
      title: 'Documentation',
      description: 'Write technical documentation',
      status: 'In Progress'
    }
  ];
  currentItem: any;
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group here
    this.taskForm = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required]
    });
  }


  // Method to filter tasks based on status
  filterTasks(status: string) {
    return this.tasks.filter(task => task.status === status);
  }

  // Method to handle drag events
  onDragStart(task: any) {
    this.currentItem = task;
  }

  // Method to handle drop events
  onDrop(event: DragEvent, status: string) {
    const record = this.tasks.find(task => task.id === this.currentItem.id);
    if (record != undefined) {
      record.status = status; // Update the status of the task
    }
    this.currentItem = null; // Clear the current item

  }

  // Method to handle drag over events
  onDragOver(event: DragEvent) {
    event.preventDefault(); // Prevent default to allow drop
  }

  //Submit Form
  onSubmit() {
    if (this.taskForm.valid) {
      const newTask = {
        id: this.tasks.length + 1,
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        status: this.taskForm.value.status
      };
      this.tasks.push(newTask); // Add new task to the list
      this.taskForm.reset(); // Reset the form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}
