import Head from 'next/head';

import wrapBody from 'components/wrap-body';


function AnotherPage() {
  return (
    <div>
      <Head>
        <title>Another - Next.js demo</title>
      </Head>

      This is another page
    </div>
  );
}

export default wrapBody(AnotherPage);
