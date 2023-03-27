import { Component, OnInit } from '@angular/core';
import { TemplateViewComponent } from './modules/templates/components/template-view/template-view.component';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public randmonNumber!: number;

  constructor(private testService: TestService) {
  }

  ngOnInit() {
    this.randmonNumber = this.testService.value;
  }
}
