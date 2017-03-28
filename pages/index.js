import Head from 'next/head';

import Button from 'components/button';
import wrapBody from 'components/wrap-body';


function IndexPage() {
  return (
    <div>
      <Head>
        <title>Index - Next.js demo</title>
      </Head>

      <p className="special">
        Hello world
      </p>

      <Button>
        Plain old button
      </Button>

      <style jsx>{`
        .special {
          font-style: italic;
        }
      `}</style>
    </div>
  );
}

export default wrapBody(IndexPage);
