import { Injectable } from '@angular/core';

@Injectable()
export class TemplateViewService {

  constructor() { }

  get number() {
    return Math.random() * 10;
  }
}
