import { ConfigurableModuleBuilder } from '@nestjs/common';
import { StripeModuleOptions } from './stripe.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, ASYNC_OPTIONS_TYPE } =
  new ConfigurableModuleBuilder<StripeModuleOptions>().setClassMethodName('forRoot').build();
