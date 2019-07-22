import { action, observable } from 'mobx';
import { IGoods } from '../../interfaces';

export default class MobxStore {
  @observable
  curGoods = {} as IGoods;

  @observable
  loading = true;

  @action
  setCurGoods(goods: IGoods) {
    this.curGoods = goods;

    return this;
  }

  @action
  setLoading(flag: boolean) {
    this.loading = flag;

    return this;
  }
}
