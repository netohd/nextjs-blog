---
title: 'Using Fastify secure-session with NestJs'
date: '2023-09-20'
---

NestJS, when combined with Fastify secure-session, provides an effective and secure solution for managing sessions in web applications. Setting it up is straightforward:

```js
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifySecureSession from 'fastify-secure-session';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.register(fastifySecureSession, {
    key: Buffer.from('your-secret-key'),
    cookie: { secure: true },
  });

  await app.listen(3000);
}
```

With this configuration in place, you can store and access session data securely in your NestJS controllers. This approach simplifies session management in your application while ensuring the security of user data. Ensuring your sessions are protected is critical for the overall security of your application, and Fastify secure-session makes this task easier than ever.