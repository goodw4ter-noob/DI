import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateViewComponent } from './components/template-view/template-view.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { TemplateComponent } from './template.component';
import { TemplateViewService } from './services/template-view.service';

export const RANDOM_NUMBER = new InjectionToken<number>('randomNumber');

@NgModule({
  declarations: [
    TemplateViewComponent,
    TemplateFormComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: RANDOM_NUMBER, useValue: Math.random() },
    { provide: TemplateViewService, useClass: TemplateViewService, }
  ],
  exports: [TemplateComponent],
})
export class TemplatesModule { }
