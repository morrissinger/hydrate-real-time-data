import test from 'ava';
import {spy} from 'sinon';

import lambda from '../src/index';

const deviceIds = [
  "G030JF057325N1CB",
  "G030MD035027PAFA",
  "G030MD034171TRTQ"
];

test.before(() => {
  /**
  * Set up any rewiring of imports or other objects available at the top
  * namespace in the lambda file. For example:
  *
  * lambda.__set__('myImport', {
  *   // Some attributes
  * });
  *
  */
})

test.after(() => {
  /**
   * Reset rewiring after completing tests. For example:
   *
   * lambda.__ResetDependency__('myImport');
   */
});

test('appends the storeId to each sales item', t => {
  const item1 = {
    id: 0,
    sku: 10,
    itemCount: 1,
    saleAmount: 10.1,
  	saletime: "2017-10-27 08:00:00"
  };
  const item2 = {
    id: 1,
    sku: 11,
    itemCount: 2,
    saleAmount: 25.50,
  	saletime: "2017-10-27 08:01:00"
  };

  const event = {
    deviceId: 'foo',
    sales: [
      item1,
      item2
    ]
  };
  const context = {type: 'test-event'};

  const callback = spy();

  lambda(event, context, callback);

  t.true(callback.called);
});
