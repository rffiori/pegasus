import { PricingOptions } from './pricingOptions';

export interface Pricing {
    id: number;
    name: string;
    price: string;
    priceLabel: string;
    tags: Array<string>;
    options: Array<PricingOptions>;
}
