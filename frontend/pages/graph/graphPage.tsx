import { getServers } from 'dns';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type GraphDataType = {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    q5: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const host = 'localhost:8080'
        const products = await fetch(`http://localhost:8080/getJson`)
            .then(data => data.json())
        
        const GraphData: GraphDataType = {
            q1: products.q1,
            q2: products.q2,
            q3: products.q3,
            q4: products.q4,
            q5: products.q5,
        } 
        return {
            props:  GraphData
        }
    } catch (e) {
        console.log(e)
        const GraphData: GraphDataType = {
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
        } 
        return {
            props: GraphData
        }
    }
  }

const GraphPage: NextPage<GraphDataType> = ( props: GraphDataType ) => {
    const keys = Object.keys(props);
    const graphData = {
        labels: keys,
        datasets: [
            {
                label: "調査結果",
                data: [props.q1, props.q2, props.q3, props.q4, props.q5],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',                
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                  ],
                borderWidth: 1,
            }
        ]
    }
    const options = {
        maintainAspectRatio: false,
        responsive: false
      };
    return (
      <div>
          <Head>
              <title>Graph Page</title>
              <meta name="description" content="検索エンジン用の説明文" />
          </Head>
          <h1>Graph Page</h1>
          <Pie  data={graphData} />;
      </div>
    )
}





export default GraphPage;