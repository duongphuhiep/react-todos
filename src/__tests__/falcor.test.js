jest.unmock("falcor")
import {Model as FalcorModel} from "falcor"

describe("falcor model", ()=>{

  let model = new FalcorModel({
    cache: {
      stock: [
        {
          name: "iphone",
          category: "smartphone",
          price: 600
        },
        {
          name: "nexus",
          category: "smartphone",
          price: 400
        }
      ]
    }
  })


  pit("get value should async", ()=>{
    return model.getValue("stock[1].name").then((v)=>{
      expect(v).toEqual("nexus")
    })
  })

  pit("get value set should async", ()=>{
    return model.get("stock[0..1]['name','price']").then((v)=>{
      expect(v.json.stock[0].price).toEqual(600)
      expect(v.json.stock[1].name).toEqual("nexus")
    })
  })
  
})

