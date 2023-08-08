import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Desenvolvedor full stack com mais de três anos de experiência,
          entusiasta das tecnologias voltadas para web. Possui facilidade
          na resolução de problemas, comunicação e no aprendizado de novas
          tecnologias. Principais competências técnicas:
          JavaScript/Typescript, Nest, React, Spring Boot,
          SQL/Mongo, GraphQL/REST, AWS.
        </p>
        <p>
          - Visite meu <a href="https://github.com/netohd">perfil no Github </a>
          e veja alguns trabalhos.
        </p>
        <p>
          <a href="/posts/first-post">Blog </a>
        </p>
      </section>
    </Layout>
  );
}