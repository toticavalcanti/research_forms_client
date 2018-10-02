import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);