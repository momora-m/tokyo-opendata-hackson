import { getServers } from 'dns';
import type { NextPage } from 'next'
import Head from 'next/head';



export async function getServerSideProps () {
  try {
      const host = 'localhost:8080'
      const products = await fetch(`http://localhost:8080/getJson`)
          .then(data => data.json())
      return {
          props: {
              products,
          }
      }
  } catch (e) {
      console.log(e)
      return {
          props: {
              products: [],
          }
      }
  }
}

const GraphPage: NextPage = (props) => {
  return (
      <div>
          <Head>
              <title>Graph Page</title>
              <meta name="description" content="検索エンジン用の説明文" />
          </Head>
          <h1>Graph Page</h1>
           <pre><code>{JSON.stringify(props,null,2)}</code></pre>
      </div>
  )
}



export default GraphPage;