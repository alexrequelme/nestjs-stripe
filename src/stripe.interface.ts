import Stripe from 'stripe';

export interface StripeModuleOptions {
  apiKey: string;
  clientKey: string;
  webhookSecretKey: string;
  config: Stripe.StripeConfig;
}
