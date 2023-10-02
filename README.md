<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://camo.githubusercontent.com/5f54c0817521724a2deae8dedf0c280a589fd0aa9bffd7f19fa6254bb52e996a/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667" width="120" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Stripe Module</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

```bash
pnpm add stripe
pnpm add https://github.com/alexrequelme/nestjs-stripe.git
```

```ts
import { Module } from '@nestjs-common';
import { StripeModule } from 'nestjs-stripe';

@Module({
  imports: [
    StripeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [stripeConfig.KEY],
      useFactory: (config: ConfigType<typeof stripeConfig>) => ({
        apiKey: config.secretKey,
        options: { apiVersion: '2023-08-16' },
      }),
    })
  ],
  providers: [...],
})
export class AppModule {}
```

## Author

Alexander Requelme

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
