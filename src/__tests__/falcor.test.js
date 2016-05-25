jest.unmock("falcor")
import {Model as FalcorModel} from "falcor"

describe("falcor model", ()=>{
  it("should async", ()=>{

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

    model.getValue("stock[1].name").then((v)=>{
      expect(v).toEqual("nexus")
    })

  })
})

