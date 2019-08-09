import React, { Component } from 'react';
import { inject, observer, Provider } from 'mobx-react';
import { configure } from 'mobx';
import { autobind } from 'core-decorators';
import Store from '../../store/store';
import Action from '../../store/action';
import { Button, Spin } from 'antd';

import './index.scss';

import SuccessIcon from '../../assets/images/success.svg';

configure({ enforceActions: 'always' });

const rootStore = new Store();
const rootAction = new Action(rootStore);

interface IProps extends Partial<{ store: Store; action: Action }> {
  prefixCls?: string;
}

@inject('store', 'action')
@observer
@autobind
class Mobx extends Component<IProps, {}> {
  static defaultProps = {
    prefixCls: 'page-mobx',
  };

  componentDidMount() {
    this.handleLoadGoods();
  }

  handleLoadGoods() {
    this.props.action!.loadGoods();
  }

  render() {
    const { prefixCls, store } = this.props;
    const {
      curGoods: { name, desc },
      loading,
    } = store!;

    return (
      <div className={prefixCls}>
        <h1>this is mobx page</h1>
        <SuccessIcon style={{ width: 100, height: 100 }} />
        <h2>当前产品</h2>
        <div className="goods-wrapper">
          <Spin spinning={loading}>
            <ul>
              <li>{name}</li>
              <li>{desc}</li>
            </ul>
          </Spin>
          <Button size="large" type="primary" onClick={this.handleLoadGoods} disabled={loading}>
            换一个
            <i className="fa fa-angle-right fa-2x icon-right" aria-hidden="true" />
          </Button>
        </div>
      </div>
    );
  }
}

export default observer(() => (
  <Provider store={rootStore} action={rootAction}>
    <Mobx />
  </Provider>
));
