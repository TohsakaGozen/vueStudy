# HTTP
HTTP(hypertext transport protocol)协议【超文本传输协议】，协议详细规定了浏览器和万维网之间互相通信的规则

## 请求报文
重点是格式与参数
```
行      POST   /url      HTTp/1.1
头      Host: Tohsaka.com
        Cookie: name=Tohsaka
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```

## 响应报文
```
行      HTTp/1.1   200     OK
头      Content-type: text/html;charset=uft-8
        Content-length: 2048
        Content-encoding: gzip
空行
体      <html>
            <head>
            
            </head>
            <body>
                <h1>Tohsaka</h1>            
            </body>
        </html>
```