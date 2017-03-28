import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import Link from 'next/link';

import wrapBody from 'components/wrap-body';
import { serverUrl } from 'config';


async function getPosts() {
  const response = await fetch(`${serverUrl}/blog`);
  return response.json();
}

function BlogComponent({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog - Next.js demo</title>
      </Head>

      {posts.map(({ id, title }) =>
        <p key={id}>
          <Link
            href={{ pathname: '/post', query: { id } }}
            as={`/blog/${id}`}
            prefetch
          >
            <a>{title}</a>
          </Link>
        </p>
      )}
    </div>
  );
}

BlogComponent.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default wrapBody(BlogComponent);
