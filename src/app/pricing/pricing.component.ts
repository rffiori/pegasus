import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pricing } from './models/pricing';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';

@Component({
    selector: 'pegasus-pricing',
    standalone: true,
    imports: [CommonModule, PricingCardComponent],
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent {
    pricing$: Observable<Array<Pricing>> = inject(ActivatedRoute).data?.pipe(map((data) => data['pricingData'] as Array<Pricing>));
}
