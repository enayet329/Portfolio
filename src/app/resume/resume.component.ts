import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isEducation: boolean = false;
  isProjects: boolean = false;
  isSkills: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Enayet Hossain - Resume');
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1YFqEoCVhkcfsjmk0KdjMujv68Ttp9atJ/view');
    link.setAttribute('download', 'Enayet_Hossain_Resume.pdf');
    link.click();
    link.remove();
  }
}
