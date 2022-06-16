# learning-of-qianduan
前端学习
git 提交：

SSL问题：OpenSSL SSL_read: Connection was reset, errno 10054
解除SSL认证，并更新DNS缓存问题
git config --global http.sslVerify "false"
ipconfig /flushdns

超时问题：取消全局代理  
需要先设置全局代理，再取消
git config --global http.proxy http://127.0.0.1:1080
git config --global https.proxy http://127.0.0.1:1080
git config --global --unset http.proxy
git config --global --unset https.proxy
