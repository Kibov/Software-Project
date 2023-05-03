import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from '../services/profile/profile-details.service';
import { Router } from '@angular/router';
import { ProjectInterface } from '../interfaces/project-interface';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],
})
export class TaskViewComponent implements OnInit {
  project!: ProjectInterface;

  constructor(
    private _projectDetail: ProfileDetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.project = this._projectDetail.selectedProject || {
      id: 1,
      name: 'proj 1',
      description: 'some description',
    };
  }
}
