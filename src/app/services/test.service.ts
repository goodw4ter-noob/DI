import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  public value!: number;

  constructor() {
    this.getNumber();
  }

  public getNumber() {
    this.value = Math.random() * 10;
  }
}
