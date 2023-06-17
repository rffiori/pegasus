import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pricing } from '../models/pricing';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PricingService {
    private readonly PRICING_URL = 'pricing';
    private readonly http: HttpClient = inject(HttpClient);

    getPricing(): Observable<Array<Pricing>> {
        return this.http.get<Array<Pricing>>(`${environment.apiUrl}/${this.PRICING_URL}`);
    }
}
