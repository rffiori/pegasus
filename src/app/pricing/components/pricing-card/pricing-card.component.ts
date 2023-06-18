import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { Pricing } from '../../models/pricing';

@Component({
    selector: 'pegasus-pricing-card',
    standalone: true,
    imports: [CardModule, TagModule, DividerModule, NgFor, NgIf, ButtonModule],
    templateUrl: './pricing-card.component.html',
    styleUrls: ['./pricing-card.component.scss'],
})
export class PricingCardComponent {
    @Input() pricing: Pricing;
}
