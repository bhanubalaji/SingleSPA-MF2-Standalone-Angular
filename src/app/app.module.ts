import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppEffects, StateModule } from 'shared-state-mylibrary';
import { appReducer } from 'shared-state-mylibrary';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ someFeature: appReducer }), // Ensure consistent feature key
    EffectsModule.forRoot([AppEffects]), // Ensure effects are registered
    StateModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
