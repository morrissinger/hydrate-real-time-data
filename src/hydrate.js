import uuidv1 from 'uuid/v1';

const makeTimestamp = () => {
  const currentTime = new Date();
  return `${currentTime.getFullYear()}-${currentTime.getMonth()+1}-${currentTime.getDate()} ` +
      `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
};

const storeNames = {
  "G030JF057325N1CB": 'Dallas',
  "G030MD035027PAFA": 'New York',
  "G030MD034171TRTQ": 'Seattle',
  'G030JF056312SGUT': 'Chicago',
  'G030JF053102UUX7': 'Nashville'

}

const hydrate = (deviceId, transactions) => {
  const sales = [];
  Object.keys(transactions).forEach(key => {
    transactions[key].forEach(sale => {
      sales.push({
        invoiceno: uuidv1(),
        stockcode: sale.StockName,
        description: sale.Description,
        quantity: sale.Quantity,
        invoicedate: makeTimestamp(),
        unitprice: sale.UnitPrice,
        customerid: sale.CustomerId,
        storename: storeNames[deviceId],
        country: 'UNITED STATES',
      });
    });
  })

  return sales;
};

export default hydrate;
