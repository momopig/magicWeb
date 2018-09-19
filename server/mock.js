const express = require('express')
const router = express.Router()

/* START-魔法页面 */


router.get('/mock/api/magic/template/get/list', function (req, res, next) {
  res.json(
    {
      "code": "200",
        data: {
          list: [{
              "id": 16,
              "name": "16年模版",
              "previewList": [
                  {
                      "componentName": "Banner",
                      "props": {
                          "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                      }
                  },
                  {
                      "componentName": "Input",
                      "props": {
                          "placeholder": "请输入要搜索的商品"
                      }
                  }
              ]
          }, {
              "id": 17,
              "name": "17年模版",
              "previewList": [
                  {
                      "componentName": "Banner",
                      "props": {
                          "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                      }
                  },
                  {
                      "componentName": "Input",
                      "props": {
                          "placeholder": "请输入要搜索的商品"
                      }
                  }
              ]
          }]
      },
      "success": true,
      "message": null
    }
  )
})

router.get('/mock/api/magic/template/get/id', function (req, res, next) {
  res.json(
    {
      "code": "200",
        data: {
          "id": 17,
          "name": "17年模版",
          "previewList": [
              {
                  "componentName": "Banner",
                  "props": {
                      "imgSrc": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                  }
              },
              {
                  "componentName": "Input",
                  "props": {
                      "placeholder": "请输入要搜索的商品"
                  }
              }
          ]
      },
      "success": true,
      "message": null
    }
  )
})



/* END-魔法页面 */

/* START-青岛智能 */
router.get('/mock/api/query/hotspot', function (req, res, next) {
    res.json(
        {"status":0,"msg":"OK","data":{"totalCount":2,"hotData":[{"id":1,"keyWord":"集团客户","heat":4},{"id":2,"keyWord":"授信集中度","heat":4}]}}
    )
})
router.get('/mock/api/query/history', function (req, res, next) {
    res.json(
        {"status":0,"msg":"OK","data":{
            "totalCount":2,"historyData":[
                {"id":1,"keyWord":"集团客户","queryTime":"2018-09-10 12:31:23","queryTimeAlias":"5分钟前"},
                {"id":2,"keyWord":"授信集中度","queryTime":"2018-09-07 12:31:23","queryTimeAlias":"1天前"},
            ]}
        }  
    )    
})
  router.get('/mock/api/query/knowledge', function (req, res, next) {
    res.json(
        {"status":0,"msg":"OK","data":{"totalCount":8,"datas":[{"id":1,"content":"单一集团客户授信集中度又称单一客户授信集中度"},{"id":2,"content":"单一集团客户授信集中度＝最大一家集团客户授信总额／资本净额×100%"}]}}  
    )
  })

  router.get('/mock/api/query/prediction', function (req, res, next) {
    res.json(
        {"status":0,"msg":"OK","data":{"rate":0.5,"predictions":[{"id":1,"staticDate":"2018-7-31","standard":0.5,"fact":0.65,"highLimit":null,"lowLimit":null},{"id":2,"staticDate":"2018-8-30","standard":0.5,"fact":0.65,"trend":null,"highLimit":null,"lowLimit":null},{"id":3,"staticDate":"2018-9-31","standard":0.5,"fact":null,"trend":0.65,"highLimit":0.8,"lowLimit":0.6}]}}
    )
   })


/* END-青岛智能 */



module.exports = router