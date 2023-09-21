---
title: 'Using Fastify secure-session with NestJs'
date: '2023-09-20'
---

NestJS, when combined with Fastify secure-session, provides an effective and secure solution for managing sessions in web applications. Setting it up is straightforward:

```js
import secureSession from '@fastify/secure-session';

// somewhere in your initialization file
const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
);
await app.register(secureSession, {
  secret: 'averylogphrasebiggerthanthirtytwochars',
  salt: 'mq9hDxBVDbspDR6n',
});
```
Now, you can use the @Session() decorator to extract a session object from the request, as follows:

```js
@Get()
findAll(@Session() session: secureSession.Session) {
  const visits = session.get('visits');
  session.set('visits', visits ? visits + 1 : 1);
}
```

With this configuration in place, you can store and access session data securely in your NestJS controllers. This approach simplifies session management in your application while ensuring the security of user data. Ensuring your sessions are protected is critical for the overall security of your application, and Fastify secure-session makes this task easier than ever.