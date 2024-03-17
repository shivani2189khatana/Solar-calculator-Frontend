import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    { path: '', redirectTo: 'calculator', pathMatch: 'full' },
    { path: 'calculator', component: CalculatorComponent },
];
