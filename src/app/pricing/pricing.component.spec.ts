import { MockBuilder, MockProvider, MockRender, ngMocks } from 'ng-mocks';
import { PricingComponent } from './pricing.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from './components/pricing-card/pricing-card.component';

describe('PricingComponent', () => {
    ngMocks.faster();

    beforeEach(() => {
        return MockBuilder(PricingComponent, [CommonModule, PricingCardComponent]).provide(MockProvider(ActivatedRoute));
    });

    it('should create', () => {
        const fixture = MockRender(PricingComponent);
        expect(fixture.point.componentInstance).toBeDefined();
    });
});
