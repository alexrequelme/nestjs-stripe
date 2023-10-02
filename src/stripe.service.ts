import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { MODULE_OPTIONS_TOKEN } from './stripe-core.module-definition';
import { StripeModuleOptions } from './stripe.interface';

@Injectable()
export class StripeService extends Stripe {
  constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: StripeModuleOptions) {
    super(options.apiKey, options.options);
  }
}
