import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../interfaces/project-interface';
import { ProfileDetailsService } from '../services/profile/profile-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
})
export class ProjectViewComponent implements OnInit {
  constructor(
    private _projectDetail: ProfileDetailsService,
    private router: Router
  ) {}
  projects!: ProjectInterface[];

  ngOnInit() {
    this.projects = [
      {
        id: 1,
        name: 'proj 1',
        description: 'some description',
      },
      {
        id: 2,
        name: 'proj 2',
        description: 'some description',
      },
      {
        id: 3,
        name: 'proj 3',
        description: 'some description',
      },
      {
        id: 4,
        name: 'proj 1',
        description: 'some description',
      },
      {
        id: 5,
        name: 'proj 2',
        description: 'some description',
      },
      {
        id: 6,
        name: 'proj 3',
        description: 'some description',
      },
      {
        id: 7,
        name: 'proj 1',
        description: 'some description',
      },
      {
        id: 8,
        name: 'proj 2',
        description: 'some description',
      },
      {
        id: 9,
        name: 'proj 3',
        description: 'some description',
      },
    ];
  }

  elementSelected(input: ProjectInterface): void {
    console.log(input);
    this._projectDetail.selectedProject = input;
    this.router.navigate(['/projectsDetail']);
  }
}
