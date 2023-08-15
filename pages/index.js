import Link from 'next/link';
import Head from 'next/head';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';

export default function Home({ allPostsData }) {
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
          - Visite meu <a href="https://github.com/netohd" target="_blank">perfil no Github </a>
          e veja alguns trabalhos.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}