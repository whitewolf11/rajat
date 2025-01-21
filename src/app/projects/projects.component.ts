import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      project1: 'assets/Image/image1.jpg', // Path to the first project image
      details: 'Details about Project 1...'
    },
    {
      project2: 'assets/Image/image2.jpg', // Path to the second project image
      details: 'Details about Project 2...'
    },{
      project1: 'assets/Image/image2.jpg', // Path to the second project image
      details: 'Details about Project 2...'
    },{
      project1: 'assets/Image/image2.jpg', // Path to the second project image
      details: 'Details about Project 2...'
    },
    // Add more projects as needed
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.projects.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.projects.length - 1) ? this.currentIndex + 1 : 0;
  }
}
