import {Model as FalcorModel} from "falcor"
import HttpDataSource from "falcor-http-datasource"


var model = new FalcorModel({
  //source: new HttpDataSource('//localhost:9090/model.json')
  source: new HttpDataSource('/model.json')
})

model.getValue(["productListById", 15, "name"])
  .then(
    (v)=>{
      console.log(v)
    },
    (err)=>{
      console.error(err)
    }
  )