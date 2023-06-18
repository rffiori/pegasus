import { ActivatedRoute } from '@angular/router';
import { PricingCardComponent } from './pricing-card.component';
import { MockBuilder, MockProvider, MockRender, ngMocks } from 'ng-mocks';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { NgFor, NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';

describe('PricingCardComponent', () => {
    ngMocks.faster();

    beforeEach(() => {
        return MockBuilder(PricingCardComponent, [CardModule, TagModule, DividerModule, NgFor, NgIf, ButtonModule]);
    });

    it('should create', () => {
        const fixture = MockRender(PricingCardComponent);
        expect(fixture.point.componentInstance).toBeDefined();
    });
});
