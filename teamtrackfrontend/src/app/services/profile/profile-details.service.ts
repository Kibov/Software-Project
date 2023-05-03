import { Injectable } from '@angular/core';
import { ProjectInterface } from 'src/app/interfaces/project-interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  private _selectedProject!: ProjectInterface;

  constructor() {}

  public get selectedProject(): ProjectInterface {
    return this._selectedProject;
  }
  public set selectedProject(value: ProjectInterface) {
    this._selectedProject = value;
  }
}
