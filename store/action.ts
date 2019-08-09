import { getGoods } from '../common';
import Store from './store';

export default class MobxAction {
  constructor(private store: Store) {}

  async loadGoods() {
    this.store
      .setLoading(true)
      .setCurGoods(await getGoods())
      .setLoading(false);
  }
}
