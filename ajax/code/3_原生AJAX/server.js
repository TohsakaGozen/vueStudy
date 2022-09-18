//引入express
const { request, response } = require('express')
const express = require('express')

//2.创建应用对象
const app = express()

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 色设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')

    //设置响应体
    response.send('HELLO AJAX GET')
})

//可以接受任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头 色设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    response.send('HELLO AJAX POST')
})
//JSON响应
app.all('/json-server', (request, response) => {
    //设置响应头 色设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    const data = {
        name: 'Tohsaka'
    }
    let str = JSON.stringify(data)
    response.send(str)
})
//针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头 色设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('HELLO AJAX IE-3')
})
//延时响应
app.get('/delay', (request, response) => {
    //设置响应头 色设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    setTimeout(() => {
        response.send('HELLO AJAX IE-3')
    }, 3000)

})
//axios发送AJAX请求
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体

    const data = { name: 'Tohsaka' }
    response.send(JSON.stringify(data))
})
//fetch函数发送AJAX请求
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体

    const data = { name: 'Tohsaka' }
    response.send(JSON.stringify(data))
})
//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务器已经启动,8000端口 监听中....')
})