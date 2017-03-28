import Head from 'next/head';

import wrapBody from 'components/wrap-body';


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

AnotherPage.getInitialProps = ({ req }) => {
  return {
    from: req ? 'server' : 'client',
  };
};

export default wrapBody(AnotherPage);
