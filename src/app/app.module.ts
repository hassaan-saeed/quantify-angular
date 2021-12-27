import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SubAccountsComponent } from './sub-accounts/sub-accounts.component';
import { ResultsComponentComponent } from './results-component/results-component.component';
import { GraphsComponentComponent } from './graphs-component/graphs-component.component';
import { 
	IgxDataChartCoreModule,
	IgxDataChartVerticalCategoryModule,
	IgxLegendModule,
	IgxDataChartInteractivityModule
 } from "igniteui-angular-charts";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignupComponentComponent,
    LoginComponentComponent,
    SubAccountsComponent,
    ResultsComponentComponent,
    GraphsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    IgxDataChartCoreModule,
    IgxDataChartVerticalCategoryModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports:[
    MatFormFieldModule
  ]
})
export class AppModule { }
