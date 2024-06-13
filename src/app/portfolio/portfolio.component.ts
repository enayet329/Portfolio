import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  isCollapsed: boolean = true;

  CSharp: boolean = false;
  ASPNET: boolean = false;
  EntityFramework: boolean = false;
  ASPIDENTITY: boolean = false;
  NETWebAPI: boolean = false;
  JavaScript: boolean = false;
  TypeScript: boolean = false;
  Angular: boolean = false;
  React: boolean = false;
  NextJs: boolean = false;
  Docker: boolean = false;
  SQL: boolean = false;
  MongoDB: boolean = false;
  RabbitMQ: boolean = false;
  JWT: boolean = false;
  Html: boolean = false;
  Css: boolean = false;
  Unsplash: boolean = false;
  OpenApi: boolean = false;
  Swagger: boolean = false;
  MicroservicesArchitecture: boolean = false;
  CleanArchitecture: boolean = false;
  SOLID: boolean = false;
  REST: boolean = false;
  more: boolean = false;
  Git: boolean = false;
  filtering: boolean = false;

  constructor(
    private titleService: Title,
    private projectServices: ProjectsService
  ) {
    this.titleService.setTitle('Enayet Hossain - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectServices.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.CSharp) {
      filterTags.push(Tag.CSharp);
    }
    if (this.ASPNET) {
      filterTags.push(Tag.ASPNET);
    }
    if (this.EntityFramework) {
      filterTags.push(Tag.EntityFramework);
    }
    if (this.ASPIDENTITY) {
      filterTags.push(Tag.ASPIDENTITY);
    }
    if (this.NETWebAPI) {
      filterTags.push(Tag.NETWebAPI);
    }
    if (this.JavaScript) {
      filterTags.push(Tag.JavaScript);
    }
    if (this.TypeScript) {
      filterTags.push(Tag.TypeScript);
    }
    if (this.Angular) {
      filterTags.push(Tag.Angular);
    }
    if (this.React) {
      filterTags.push(Tag.React);
    }
    if (this.NextJs) {
      filterTags.push(Tag.NextJs);
    }
    if (this.Docker) {
      filterTags.push(Tag.Docker);
    }
    if (this.SQL) {
      filterTags.push(Tag.SQL);
    }
    if (this.MongoDB) {
      filterTags.push(Tag.MongoDB);
    }
    if (this.RabbitMQ) {
      filterTags.push(Tag.RabbitMQ);
    }
    if (this.JWT) {
      filterTags.push(Tag.JWT);
    }
    if (this.Html) {
      filterTags.push(Tag.Html);
    }
    if (this.Css) {
      filterTags.push(Tag.Css);
    }
    if (this.Unsplash) {
      filterTags.push(Tag.Unsplash);
    }
    if (this.OpenApi) {
      filterTags.push(Tag.OpenApi);
    }
    if (this.Swagger) {
      filterTags.push(Tag.Swagger);
    }
    if (this.MicroservicesArchitecture) {
      filterTags.push(Tag.MicroservicesArchitecture);
    }
    if (this.CleanArchitecture) {
      filterTags.push(Tag.CleanArchitecture);
    }
    if (this.SOLID) {
      filterTags.push(Tag.SOLID);
    }
    if (this.REST) {
      filterTags.push(Tag.REST);
    }
    if (this.more) {
      filterTags.push(Tag.more);
    }
    if (this.Git) {
      filterTags.push(Tag.Git);
    }

    if (
      this.CSharp ||
      this.ASPNET ||
      this.EntityFramework ||
      this.ASPIDENTITY ||
      this.NETWebAPI ||
      this.JavaScript ||
      this.TypeScript ||
      this.Angular ||
      this.React ||
      this.NextJs ||
      this.Docker ||
      this.SQL ||
      this.MongoDB ||
      this.RabbitMQ ||
      this.JWT ||
      this.Html ||
      this.Css ||
      this.Unsplash ||
      this.OpenApi ||
      this.Swagger ||
      this.MicroservicesArchitecture ||
      this.CleanArchitecture ||
      this.SOLID ||
      this.REST ||
      this.more ||
      this.Git
    ) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    this.projects = this.projectServices.GetProjectByFilter(filterTags);
  }

  ResetFilter() {
    this.CSharp = false;
    this.ASPNET = false;
    this.EntityFramework = false;
    this.ASPIDENTITY = false;
    this.NETWebAPI = false;
    this.JavaScript = false;
    this.TypeScript = false;
    this.Angular = false;
    this.React = false;
    this.NextJs = false;
    this.Docker = false;
    this.SQL = false;
    this.MongoDB = false;
    this.RabbitMQ = false;
    this.JWT = false;
    this.Html = false;
    this.Css = false;
    this.Unsplash = false;
    this.OpenApi = false;
    this.Swagger = false;
    this.MicroservicesArchitecture = false;
    this.CleanArchitecture = false;
    this.SOLID = false;
    this.REST = false;
    this.more = false;
    this.Git = false;
    this.filtering = false;

    this.projects = this.projectServices.GetProjects();
  }
}
