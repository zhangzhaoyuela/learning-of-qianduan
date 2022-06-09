# learning-of-qianduan
前端学习
git 提交：

SSL问题：OpenSSL SSL_read: Connection was reset, errno 10054
解除SSL认证，并更新DNS缓存问题
git config --global http.sslVerify "false"
ipconfig /flushdns

超时问题：取消全局代理  
git config --global --unset https.proxy
