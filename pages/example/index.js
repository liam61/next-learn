import React, { Component } from 'react';
import Head from 'next/head';
import { Button, Spin } from 'antd';
import ExampleCom from '../../components/ExampleCom';
import { autobind } from 'core-decorators';
import { getGoods } from '../../common';

import './style.less';

@autobind
export default class Example extends Component {
  static async getInitialProps({ req, res }) {
    const { name, desc } = await getGoods();

    return { name, desc };
  }

  constructor(props) {
    super(props);

    const { name, desc } = props;

    this.state = { name, desc, loading: false };
  }

  async handleClick() {
    this.setState({ loading: true });

    const { name, desc } = await getGoods();

    this.setState({ name, desc, loading: false });
  }

  render() {
    const { name, desc, loading } = this.state;

    return (
      <div>
        <Head>
          <title>next-learn/example</title>
        </Head>

        <div>
          <ExampleCom author="lawler" />
          <Spin spinning={loading}>
            <ul>
              <li>{name}</li>
              <li>{desc}</li>
            </ul>
          </Spin>
          <div className="btn">
            <Button onClick={this.handleClick} disabled={loading}>
              click me
            </Button>
          </div>
          <style global jsx>{`
            div.blue {
              font-size: 16px;
              color: lightgreen;
            }
          `}</style>

          <style jsx>{`
            div.blue {
              font-size: 16px;
              color: lightgreen;
            }

            ul {
              width: 300px;
              margin: 10px auto 0;
              padding: 0;
              border-radius: 4px;
              border: 1px solid #2e61c8;
            }

            li {
              margin-bottom: 3px;
              padding: 10px 0;
              text-align: center;
              background: #2e61c8;
              color: #fff;
            }

            li:last-child {
              margin-bottom: 0;
            }

            .btn {
              margin: 30px auto 0;
              text-align: center;
            }

            button {
              width: 120px;
              height: 40px;
            }
          `}</style>
        </div>
      </div>
    );
  }
}
