import { Time } from '@angular/common';

export interface CommentInterface {
  user: string;
  created_at: Time;
  body: string;
}
