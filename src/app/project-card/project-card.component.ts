import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project!: Project;
  bsModalRef?: BsModalRef;

  constructor(private readonly modalService: BsModalService) {}

  openProjectModal(): void {
    const modalOption: ModalOptions = {
      class: 'modal-lg modal-dialog-centered',
      initialState: { project: this.project },
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOption);
  }

  trackTag = (_: number, tag: { toString(): string }) => tag.toString();
}
