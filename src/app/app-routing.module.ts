import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from './index/index.component'
import {BiographyComponent} from './biography/biography.component'
import {ContactsComponent} from './contacts/contacts.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {DevSkillsComponent} from './dev-skills/dev-skills.component'
import RouteNames from "../Helpers/RouteNames";

const routes: Routes = [
	{path: RouteNames.Index, component: IndexComponent},
	{path: RouteNames.Biography, component: BiographyComponent},
	{path: RouteNames.Contacts, component: ContactsComponent},
	{path: RouteNames.DevSkills, component: DevSkillsComponent},
	{path: RouteNames.Root, component: IndexComponent, pathMatch: 'full'},
	{path: RouteNames.Wildcard, component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
