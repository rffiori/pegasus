import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Pricing } from './models/pricing';
import { Observable } from 'rxjs';
import { PricingService } from './services/pricing.service';

export const pricingResolver: ResolveFn<Observable<Pricing[]>> = () => inject(PricingService).getPricing();
