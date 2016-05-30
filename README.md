A Learning batte-field for

* [ReactJs](http://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Immutable](https://facebook.github.io/immutable-js/)
* [Jest](https://facebook.github.io/jest/)

it is an incomplete todo apps project, to try the above framework

# Falcor branch 

This branch is reserved to play with [Falcor](http://netflix.github.io/falcor)

## Falcor request response samples

```javascript
model.get("stock[0..3].product['name', 'price']")
```
 * But product[1000] and stock[3] not exist

`http://localhost:9090/model.json?paths=[["stock",{"from":0,"to":3},"product",["name","price"]]]&method=get`

```json
{
    "jsonGraph": {
        "stock": {
            "0": {
                "product": {
                    "$type": "ref",
                    "value": ["productListById", 15],
                    "$size": 52
                }
            },
            "1": {
                "product": {
                    "$type": "ref",
                    "value": ["productListById", 1000],
                    "$size": 52
                }
            },
            "2": {
                "product": {
                    "$type": "ref",
                    "value": ["productListById", 17],
                    "$size": 52
                }
            },
            "3": { "$type": "atom"}
        },
        "productListById": {
            "15": {"name": "iphone", "price": 600},
            "17": {"name": "oneplus", "price": 320},
            "1000": {"$type": "atom"}
        }
    },
    "paths": [
        ["stock", 0, "product", "name"],
        ["stock", 0, "product", "price"],
        ["stock", 1, "product"],
        ["stock", 2, "product", "name"],
        ["stock", 2, "product", "price"],
        ["stock", 3]
    ]
}
```

