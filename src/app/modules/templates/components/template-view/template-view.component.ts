import { Component, Inject } from '@angular/core';
import { TemplateViewService } from '../../services/template-view.service';
import { RANDOM_NUMBER } from '../../templates.module';

@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.scss'],
})
export class TemplateViewComponent {
  public randomFormNumber!: number;
  public serviceValue!: number;

  constructor(
    @Inject(RANDOM_NUMBER) randomNumber: number,
    private readonly templateViewService: TemplateViewService,
  ) {
    this.randomFormNumber = randomNumber;
    this.serviceValue = this.templateViewService.number;
  }

}
