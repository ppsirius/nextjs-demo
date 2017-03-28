import Head from 'next/head';

import wrapBody from 'components/wrap-body';
import sleep from 'utils/sleep';


function AnotherPage({ from }) {
  return (
    <div>
      <Head>
        <title>Another - Next.js demo</title>
      </Head>

      This is another page: {from}
    </div>
  );
}

AnotherPage.getInitialProps = async ({ req }) => {
  await sleep(500);
  return {
    from: req ? 'server' : 'client',
  };
};

export default wrapBody(AnotherPage);
