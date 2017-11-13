import hydrate from './hydrate';

const transactions = {
  "536365": [
     {
        "StockCode": "85123A",
        "Description": "WHITE HANGING HEART T-LIGHT HOLDER",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 2.55,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "71053",
        "Description": "WHITE METAL LANTERN",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 3.39,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "84406B",
        "Description": "CREAM CUPID HEARTS COAT HANGER",
        "Quantity": 8,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 2.75,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "84029G",
        "Description": "KNITTED UNION FLAG HOT WATER BOTTLE",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 3.39,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "84029E",
        "Description": "RED WOOLLY HOTTIE WHITE HEART.",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 3.39,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "22752",
        "Description": "SET 7 BABUSHKA NESTING BOXES",
        "Quantity": 2,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 7.65,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "21730",
        "Description": "GLASS STAR FROSTED T-LIGHT HOLDER",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:26:00",
        "UnitPrice": 4.25,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     }
  ],
  "536366": [
     {
        "StockCode": "22633",
        "Description": "HAND WARMER UNION JACK",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:28:00",
        "UnitPrice": 1.85,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "22632",
        "Description": "HAND WARMER RED POLKA DOT",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:28:00",
        "UnitPrice": 1.85,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     }
  ],
  "536367": [
     {
        "StockCode": "22633",
        "Description": "HAND WARMER UNION JACK",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:28:00",
        "UnitPrice": 1.85,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "22632",
        "Description": "HAND WARMER RED POLKA DOT",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:28:00",
        "UnitPrice": 1.85,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     }
  ],
  "536368": [
     {
        "StockCode": "22633",
        "Description": "HAND WARMER UNION JACK",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:28:00",
        "UnitPrice": 1.85,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     },
     {
        "StockCode": "22632",
        "Description": "HAND WARMER RED POLKA DOT",
        "Quantity": 6,
        "InvoiceDate": "2010-12-01 08:28:00",
        "UnitPrice": 1.85,
        "CustomerID": 17850,
        "Country": "United Kingdom"
     }
  ]
};

const chunkSize = 1;

const records = hydrate('G030JF057325N1CB', transactions);

const start = Math.floor((Math.random() * (records.length - chunkSize - 1)));

const subset = records.slice(start, start + chunkSize);

console.log(subset);
