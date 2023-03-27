import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributesModule } from './modules/attributes/attributes.module';
import { TemplatesModule } from './modules/templates/templates.module';
import { TestService } from './services/test.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AttributesModule,
    TemplatesModule,
  ],
  providers: [
    { provide: TestService, useClass: TestService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
