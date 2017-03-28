import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import Link from 'next/link';

import wrapBody from 'components/wrap-body';
import { serverUrl } from 'config';


async function getPost(id) {
  const response = await fetch(`${serverUrl}/blog/${id}`);
  return response.json();
}

function PostPage({ title, text }) {
  return (
    <div>
      <Head>
        <title>{title} - Next.js demo</title>
      </Head>

      <h1>{title}</h1>

      {text}
    </div>
  );
}

PostPage.getInitialProps = async ({ query }) => {
  const post = await getPost(query.id);
  return { ...post };
};

export default wrapBody(PostPage);
