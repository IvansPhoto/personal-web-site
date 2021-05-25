import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {IndexComponent} from './index/index.component';
import {BiographyComponent} from './biography/biography.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DevSkillsComponent} from './dev-skills/dev-skills.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';

@NgModule({
  declarations: [
    AppComponent,
		IndexComponent,
		BiographyComponent,
		NavComponent,
		FooterComponent,
		NotFoundComponent,
		DevSkillsComponent,
		ContactsComponent,
  ResponsibilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
