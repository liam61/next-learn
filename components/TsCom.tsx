import React, { Fragment, FunctionComponent } from 'react';
import { IUser } from '../interfaces';

type IProps = { users: IUser[] };

const List: FunctionComponent<IProps> = ({ users }) => (
  <Fragment>
    <h5 style={{ marginTop: 20 }}>TsCom with ts</h5>
    <ul className="user-list">
      {users.map(user => {
        const { id, name, gender } = user;

        return (
          <li key={id} className="user-list-item">
            <div className="item-name">{name}</div>
            <div className="item-gender">{gender}</div>
          </li>
        );
      })}
    </ul>
  </Fragment>
);

export default List;
