import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../_services/experience.service';
import { Experience } from '../_models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  entries: Experience[] = [];

  constructor(private readonly experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.entries = this.experienceService.getAll();
  }
}
