## npm init      "license": "MIT"   // 初始化项目， license 设置 为 MIT

npm install --save browser-sync    // 下载 browser-sync



## 更改 package.json 文件
  "scripts": {
     "dev": "browser-sync start --server --files \"*.*\""
   },


npm run dev    // 运行 browser-sync
