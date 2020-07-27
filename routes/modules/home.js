const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  Todo.find() //取出 Todo model 的所有資料，若有填入參數則取出部分資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ _id: "asc" }) //asc 升冪(ascending) //desc 降冪(descending)
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(error => console.log(error)) //錯誤處理
})

module.exports = router
