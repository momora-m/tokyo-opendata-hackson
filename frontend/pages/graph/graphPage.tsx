import { getServers } from 'dns';
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Box, Grid, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

type GraphDataType = {
    q5:{
        middle1: number;
        junour56: number;
        middle3: number;
        junour34: number;
        high1: number;
        high2: number;
        middle2: number;
        high3: number;
        junour12: number;
    },
    q7:{
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
    },
    q14:{
        aa: number;
        bb: number;
        cc: number;
        dd: number;
        ee: number;
        ff: number;
        gg: number;
        hh: number;
        ii: number;
        jj: number;
        kk: number;
        ll: number;
        mm: number;
    }

};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const host = 'localhost:8080'
        const products = await fetch(`http://localhost:8080/getJson`)
            .then(data => data.json())
        
        const GraphData: GraphDataType = {
            q5:{
            middle1: products.q5.middle1,
            junour56: products.q5.junour56,
            middle3: products.q5.middle3,
            junour34: products.q5.junour34,
            high1: products.q5.high1,
            high2: products.q5.high2,
            middle2: products.q5.middle2,
            high3: products.q5.high3,
            junour12: products.q5.junour12
            },
            q7:{
                a: products.q7.a,
                b: products.q7.b,
                c: products.q7.c,
                d: products.q7.d,
                e: products.q7.e,
                f: products.q7.f,
                g: products.q7.g,
                h: products.q7.h,
                i: products.q7.i,
                j: products.q7.j,
                k: products.q7.k,
                l: products.q7.l,
                m: products.q7.m,
                n: products.q7.n
            },
            q14:{
                aa: products.q14.aa,
                bb: products.q14.bb,
                cc: products.q14.cc,
                dd: products.q14.dd,
                ee: products.q14.ee,
                ff: products.q14.ff,
                gg: products.q14.gg,
                hh: products.q14.hh,
                ii: products.q14.ii,
                jj: products.q14.jj,
                kk: products.q14.kk,
                ll: products.q14.ll,
                mm: products.q14.mm
            }
        } 
        return {
            props:  GraphData
        }
    } catch (e) {
        console.log(e);
        return {
            props: []
        }
    }
  }

const GraphPage: NextPage<GraphDataType> = ( props: GraphDataType ) => {
    const keys = Object.keys(props.q5);
    const graphData = {
        labels: keys,
        datasets: [
            {
                label: "調査結果",
                data: [
                    props.q5.middle1, 
                    props.q5.junour56, 
                    props.q5.middle3, 
                    props.q5.junour34, 
                    props.q5.high1,
                    props.q5.high2, 
                    props.q5.middle2, 
                    props.q5.high3,
                    props.q5.junour12,
                ],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',                
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(20, 222, 225)',
                    'rgb(25, 215, 42)',
                    'rgb(54, 30, 235)',
                    'rgb(55, 25, 86)',
                    'rgb(20, 122, 125)',
                    'rgb(135, 115, 192)',  
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
      <Grid container alignItems='center' justifyContent='center' direction="column">
        <Box
            sx={{
            width: 600,
            height: 600,
            }}
        >
            <div>
            <Typography variant="h3" mt={5} ml={7} mb={3}>
                質問のアンケート結果 
            </Typography>
            <Pie  data={graphData} />;
            </div>
            <Typography variant="h5" gutterBottom mb={3}>
                スマホの悩みについてご相談したい方は
                <a href='https://www.tokyohelpdesk.metro.tokyo.lg.jp/'>
                    こたエール
                </a>
                へ
            </Typography>
        </Box>
      </Grid>
    )
}





export default GraphPage;