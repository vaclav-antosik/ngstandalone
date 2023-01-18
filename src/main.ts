import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {path: 'lucky', loadChildren: () => import('./app/lucky/lucky.children.routes')},
  {path: '', redirectTo: '/lucky/child1', pathMatch: 'full'}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ],
});