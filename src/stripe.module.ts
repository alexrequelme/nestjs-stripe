import { DynamicModule, Module } from '@nestjs/common';
import { StripeModuleOptions } from './stripe.interface';
import { StripeCoreModule } from './stripe-core.module';
import { ASYNC_OPTIONS_TYPE } from './stripe-core.module-definition';

@Module({})
export class StripeModule {
  static forRoot(options: StripeModuleOptions): DynamicModule {
    return StripeCoreModule.forRoot(options);
  }

  static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
    return StripeCoreModule.forRootAsync(options);
  }
}
