import { Global, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './stripe-core.module-definition';
import { StripeService } from './stripe.service';

@Global()
@Module({
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeCoreModule extends ConfigurableModuleClass {}
