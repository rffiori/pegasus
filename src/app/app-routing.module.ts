import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'pricing',
        loadComponent: () => import('./pricing/pricing.component').then((mod) => mod.PricingComponent),
    },
    {
        path: '',
        redirectTo: 'pricing',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
