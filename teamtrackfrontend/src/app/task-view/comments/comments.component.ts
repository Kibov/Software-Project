import { Component, OnInit } from '@angular/core';
import { CommentInterface } from 'src/app/interfaces/comment-interface';
import { ProjectInterface } from 'src/app/interfaces/project-interface';
import { ProfileDetailsService } from 'src/app/services/profile/profile-details.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  project!: ProjectInterface;
  comments: CommentInterface[] = [];
  constructor(private _projectDetail: ProfileDetailsService) {}

  ngOnInit(): void {
    this.project = this._projectDetail.selectedProject;
  }
}
