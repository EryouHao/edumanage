/**
 * Created by Abner on 2017/1/3.
 */
"use strict";
var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

// 创建账号接口
router.get('/login/addUser',(req,res) => {
  
});

module.exports = router;
