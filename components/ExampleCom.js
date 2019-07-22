import React, { PureComponent } from 'react';

export default class ExampleCom extends PureComponent {
  render() {
    const { author } = this.props;

    return (
      <div>
        <h5 className='title'>this is ExampleCom, with less</h5>
        <div className="blue">author is {author}</div>
        <style jsx>{`
          h5 {
            font-size: 18px;
          }
        `}</style>
      </div>
    );
  }
}
