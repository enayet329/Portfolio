import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 }), stagger('100ms', animate('600ms ease-out', style({ opacity: 1 })))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  words: string[] = []; // Explicitly type the array as string[]

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Enayet Hossain - Home');
  }

  ngOnInit() {
    const text = 'Hello! I’m Md Enayet Hossain, a dedicated web developer passionate about crafting dynamic digital solutions. With expertise in JavaScript, Angular, C#, .NET Core,  C++, CSS,  and HTML, I have developed a range of projects from small websites to complex applications. I hold a degree in Computer Science and bring a strong commitment to creating user-friendly and accessible experiences. When I’m not coding, I enjoy reading books and traveling, as well as hiking, experimenting with new recipes, and playing the guitar. Feel free to explore my portfolio and reach out for collaborations or connections. Let’s create something amazing together!';
    this.words = text.split(' ');
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}