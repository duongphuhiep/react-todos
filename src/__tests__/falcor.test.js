jest.unmock("falcor")
import {Model as FalcorModel} from "falcor"

describe("model basic", ()=>{

  var $ref = FalcorModel.ref
  console.log($ref)

  let model = new FalcorModel({
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
          product: $ref("productListById[16]"),
          quantity: 200
        }
      ]
    }
  })

  pit("get value should async", ()=>{
    return model.getValue("stock[1].product.name").then((v)=>{
      expect(v).toEqual("nexus")
    })
  })

  pit("get value set should async", ()=>{
    return model.get("stock[0..1].product['name', 'price']").then((v)=>{
      expect(v.json.stock[0].product.price).toEqual(600)
      expect(v.json.stock[1].product.name).toEqual("nexus")
    })
  })

  pit("should set quantity value", ()=>{
    return model.set({path: "stock[0].quantity", value: 160}).then((v)=>{
      //console.log(JSON.stringify(v, null, 2))
      expect(v.json.stock[0].quantity).toBe(160)
    })
  })

  pit("should set product name", ()=>{
    return model.set({path:["stock", "0", "product", "name"], value:"iphone6"}).then((v)=>{
      //console.log(JSON.stringify(v, null, 2))
      expect(v.json.stock[0].product.name).toEqual("iphone6")
    })
  })

  pit("should switch reference", ()=>{
    return model.set({path:["stock", "1", "product"], value:$ref("productListById[17]")}).then((v1)=>{
      //console.log(JSON.stringify(v1, null, 2))
      model.get("stock[1].product.name").then((v2)=>{
        expect(v.json.stock[1].product.name).toEqual("oneplus")
      })
    })
  })

})




