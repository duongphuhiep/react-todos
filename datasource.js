var express = require('express');
var falcor = require('falcor');
var app = express();
var cors = require('cors')
var falcorExpress = require('falcor-express');

//app.use(bodyParser.urlencoded({ extended: false }));


var $ref = falcor.Model.ref

var model = new falcor.Model({
  cache: {
    productListById: {
      15: {
        name: "iphone",
        category: "smartphone",
        price: 600
      },
      16: {
        name: "nexus",
        category: "smartphone",
        price: 400
      },
      17: {
        name: "oneplus",
        category: "smartphone",
        price: 320
      }
    },
    stock: [
      {
        product: $ref("productListById[15]"),
        quantity: 150
      },
      {
        product: $ref("productListById[1000]"), //try a not exist reference
        quantity: 200
      },
      {
        product: $ref("productListById[17]"),
        quantity: 100
      }
    ]
  }
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

// Simple middleware to handle get/post
app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
  console.log("recv: ", req.url);
  // Passing in the user ID, this should be retrieved via some auth system
  var resu = model.asDataSource();

  //console.log("reply: ", resu);
  return resu
}));

//app.use(express.static('.'));

var server = app.listen(9090, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("navigate to http://localhost:9090");
});