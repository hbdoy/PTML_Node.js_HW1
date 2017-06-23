# PTML_Node.js_HW1

## 說明
建立一 node 應用程式，其會監聽 HTTP 封包，此程式會在接收到任一 HTTP request 時，先對 ``http://ycchen.im.ncnu.edu.tw/join.php`` 發起一 HTTP POST request（附帶任意數量的 form data），並將此次的回傳內容，作為先前收到的 HTTP request 的回傳內容。

## 要求
- 請使用 npm 建立 package.json 管理依賴套件。
- 於 package.json 中設定 start 指令來執行此程式。
- 使用內建套件 http 來監聽 HTTP 封包。
- 使用第三方套件 request 來發送 HTTP request。
- 使用 Git 管理此程式的程式碼，並 ignore 不需版控的檔案/資料夾。
- 建立一 GitHub Repo 放置此次作業程式碼，並繳交 repo 網址。
