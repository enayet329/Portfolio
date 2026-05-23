import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../_services/skills.service';
import { SkillCategory } from '../_models/SkillCategory';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  categories: SkillCategory[] = [];

  constructor(private readonly skillsService: SkillsService) {}

  ngOnInit(): void {
    this.categories = this.skillsService.getAll();
  }
}
