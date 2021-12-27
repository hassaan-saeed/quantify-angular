import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubAccountsComponent } from './sub-accounts/sub-accounts.component';
import { ResultsComponentComponent } from './results-component/results-component.component';
import { GraphsComponentComponent } from './graphs-component/graphs-component.component';

const routes: Routes = [
  { path: 'sub-accounts', component: SubAccountsComponent },
  { path: 'results', component: ResultsComponentComponent },
  { path: 'graphs', component: GraphsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
