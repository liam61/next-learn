import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { wait } from '../common';
import TsCom from '../components/TsCom';

import './style.css';
import './style.scss';

function Home({ data }) {
  return (
    <div className="page-home">
      <Head>
        <title>next-learn/home</title>
      </Head>
      <div className="main">
        <h1 className="title">Welcome to Next.js!</h1>
        <div className="blue">this is {data.name}, with scss</div>
        <div>add webhook</div>
        <Link href="/example">
          <a>to example Page</a>
        </Link>
        <br />
        <Link href="/mobx">
          <a>to mobx Page</a>
        </Link>
        <div className="flex">
          <span className="flex-item">a flex item</span>
          <span className="flex-item">b flex item</span>
        </div>
        <TsCom users={data.users} />
        <style global jsx>{`
          div.blue {
            font-size: 20px;
            color: lightblue;
          }
        `}</style>
      </div>
    </div>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  // console.log('index page request url: ' + req.url);
  await wait();

  return {
    data: {
      name: 'lawler',
      users: [
        { id: '1', name: 'bob', gender: 'male' },
        { id: '2', name: 'alice', gender: 'female' },
      ],
    },
  };
};

export default Home;
