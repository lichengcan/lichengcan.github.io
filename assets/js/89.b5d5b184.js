(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{507:function(e,s,a){"use strict";a.r(s);var t=a(2),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("更新软件包缓存")]),e._v("：")]),e._v(" "),s("p",[e._v("在开始安装之前，更新软件包缓存以确保你使用的是最新的软件信息：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum update\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("安装 EPEL 软件包源")]),e._v("：")]),e._v(" "),s("p",[e._v("EPEL 软件包源包含了很多额外的软件包，包括 Nginx。使用以下命令安装 EPEL 软件包源：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum install epel-release\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("安装 Nginx")]),e._v("：")]),e._v(" "),s("p",[e._v("3.1 可选设置ningx安装源：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo vim /etc/yum.repos.d/nginx.repo\n [nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\ngpgcheck=0\nenabled=1\n")])])]),s("p",[e._v("3.2 使用以下命令安装 Nginx：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo yum install nginx\n")])])])])]),e._v(" "),s("p",[e._v("安装过程中可能会询问是否继续，输入 "),s("code",[e._v("Y")]),e._v(" 并按回车键确认。")]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[s("strong",[e._v("启动 Nginx 服务")]),e._v("：")]),e._v(" "),s("p",[e._v("安装完成后，使用以下命令启动 Nginx 服务：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl start nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("设置开机自启动")]),e._v("：")]),e._v(" "),s("p",[e._v("让 Nginx 在系统启动时自动运行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl enable nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("配置防火墙规则")]),e._v("：")]),e._v(" "),s("p",[e._v("如果你的系统使用了防火墙（firewall），需要允许 HTTP（80 端口）和 HTTPS（443 端口）的访问。你可以运行以下命令来设置防火墙规则：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo firewall-cmd --permanent --add-service=http\nsudo firewall-cmd --permanent --add-service=https\nsudo firewall-cmd --reload\n")])])]),s("p",[e._v("6.1 开放某个端口")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo firewall-cmd --add-port=80/tcp --permanent\n")])])]),s("p",[e._v("6.2 重启防火墙")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("firewall-cmd --reload\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("验证安装")]),e._v("：")]),e._v(" "),s("p",[e._v("打开网页浏览器，输入服务器的 IP 地址或域名，你应该能够看到 Nginx 欢迎页面。")])])]),e._v(" "),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("启动 Nginx")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl start nginx\n")])])])])]),e._v(" "),s("p",[e._v("或者，如果你是通过编译安装的方式，可以进入 Nginx 可执行文件目录，然后运行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("   sudo ./sbin/nginx\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[s("strong",[e._v("停止 Nginx")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl stop nginx\n")])])])])]),e._v(" "),s("p",[e._v("或者，如果你是通过编译安装的方式，可以运行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("   sudo ./sbin/nginx -s stop\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[s("strong",[e._v("重新加载 Nginx 配置")]),e._v("：")]),e._v(" "),s("p",[e._v("在不停止 Nginx 服务的情况下重新加载配置文件，使新的配置生效：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl reload nginx\n")])])])])]),e._v(" "),s("p",[e._v("或者，如果你是通过编译安装的方式，可以运行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("   sudo ./sbin/nginx -s reload\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[s("strong",[e._v("查看 Nginx 状态")]),e._v("：")]),e._v(" "),s("p",[e._v("查看 Nginx 服务的状态以及是否正在运行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl status nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("设置 Nginx 开机自启动")]),e._v("：")]),e._v(" "),s("p",[e._v("让 Nginx 在系统启动时自动运行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl enable nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("停用 Nginx 开机自启动")]),e._v("：")]),e._v(" "),s("p",[e._v("移除 Nginx 的开机自启动设置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl disable nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("测试 Nginx 配置是否正确")]),e._v("：")]),e._v(" "),s("p",[e._v("在修改了 Nginx 配置文件后，可以使用以下命令检查配置是否有语法错误：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo nginx -t\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("查看 Nginx 错误日志")]),e._v("：")]),e._v(" "),s("p",[e._v("查看 Nginx 的错误日志，通常位于 "),s("code",[e._v("/var/log/nginx/error.log")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo tail -f /var/log/nginx/error.log\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"nginx卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx卸载"}},[e._v("#")]),e._v(" nginx卸载")]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("停止 Nginx 服务")]),e._v("：首先，确保停止正在运行的 Nginx 服务。可以使用以下命令停止 Nginx：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo systemctl stop nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("删除 Nginx 文件")]),e._v("：你可以删除 Nginx 安装目录中的文件。通常情况下，Nginx 可执行文件位于 "),s("code",[e._v("/usr/local/nginx")]),e._v(" 或你配置的其他目录中。使用以下命令删除 Nginx 目录：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo rm -r /usr/local/nginx\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("删除 systemd 服务单元文件")]),e._v("：如果你手动创建了 systemd 服务单元文件，也需要删除它。在 "),s("code",[e._v("/etc/systemd/system")]),e._v(" 目录下查找名为 "),s("code",[e._v("nginx.service")]),e._v(" 的文件，并删除它：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo rm /etc/systemd/system/nginx.service\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("清理配置文件和日志")]),e._v("：Nginx 配置文件和日志通常位于 "),s("code",[e._v("/usr/local/nginx/conf")]),e._v(" 和 "),s("code",[e._v("/usr/local/nginx/logs")]),e._v(" 或你配置的其他目录中。删除这些目录中的配置文件和日志。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("删除系统用户和组")]),e._v("：在编译安装时，可能会创建一个用于运行 Nginx 的系统用户和组。你可以使用以下命令来删除它们：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo userdel nginx     # 用于 Ubuntu/Debian\nsudo userdel www-data  # 用于 CentOS/Red Hat\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("检查 Nginx 目录是否存在")]),e._v("：检查之前安装的 Nginx 目录是否已被删除。通常情况下，Nginx 可执行文件位于 "),s("code",[e._v("/usr/local/nginx")]),e._v(" 或你之前设置的其他目录中。运行以下命令来检查目录是否存在：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ls /usr/local/nginx\n")])])]),s("p",[e._v("如果该目录不存在，表示 Nginx 已经被卸载。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("检查 systemd 服务单元文件")]),e._v("：检查 "),s("code",[e._v("/etc/systemd/system")]),e._v(" 目录是否仍然有名为 "),s("code",[e._v("nginx.service")]),e._v(" 的文件存在。如果之前手动创建了 systemd 服务单元文件，并且该文件仍然存在，可以使用以下命令来删除它：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo rm /etc/systemd/system/nginx.service\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("检查用户和组")]),e._v("：如果之前创建了一个用于运行 Nginx 的系统用户和组，确保已经删除它们：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo userdel nginx     # 对于 Ubuntu/Debian\nsudo userdel www-data  # 对于 CentOS/Red Hat\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("清理配置文件和日志")]),e._v("：如果 Nginx 配置文件和日志目录没有被删除，你可以手动删除它们。通常情况下，配置文件位于 "),s("code",[e._v("/usr/local/nginx/conf")]),e._v("，日志位于 "),s("code",[e._v("/usr/local/nginx/logs")]),e._v(" 或你之前设置的其他目录中。")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("查看进程状态")]),e._v("：运行以下命令来查看是否有正在运行的 Nginx 进程：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ps aux | grep nginx\n")])])]),s("p",[e._v("如果没有找到任何关于 Nginx 的进程，表示 Nginx 已经被卸载。")])])]),e._v(" "),s("p",[e._v("​       有的化就kill")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo kill -9 <PID>\n")])])]),s("h2",{attrs:{id:"nginx代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx代理"}},[e._v("#")]),e._v(" nginx代理")]),e._v(" "),s("p",[e._v("代理http协议的服务")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("server {\n    listen 80;\n    server_name your_domain_or_server_ip;\n\n    location / {\n        proxy_pass http://localhost:8038;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n")])])]),s("p",[e._v("代理ws协议的服务")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('server {\n    listen 80;\n    server_name your_domain_or_server_ip;\n\n    location / {\n        proxy_pass http://localhost:8038;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}\n')])])]),s("h2",{attrs:{id:"配置图片服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置图片服务器"}},[e._v("#")]),e._v(" 配置图片服务器")]),e._v(" "),s("p",[e._v("在 /usr/share/nginx/html/目录创建文件夹")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("location /docloudresource {\n             alias /usr/share/nginx/html/docloudresource;\n\t\t\t index  index.html index.htm;\n}\n")])])]),s("p",[e._v("比如：docloudresource/image下有一个cc.png图片，通过IP访问：http://192.168.104.128/docloudresource/image/cc.png")]),e._v(" "),s("p",[e._v("完整的修改过后的nginx.conf")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\nuser  nginx;\nworker_processes  auto;\n\nerror_log  /var/log/nginx/error.log notice;\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n    accept_mutex on;\n    multi_accept on;\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    server_tokens off;\n    client_max_body_size 50m;\n    send_timeout 10;\n    client_body_timeout 10;\n    client_header_timeout 10;\n    client_header_buffer_size 1k;\n    client_body_buffer_size 8k;\n    large_client_header_buffers 4 8K;\n    fastcgi_hide_header X-Powered-By;\n    port_in_redirect off;\n\n    keepalive_timeout  65;\n\n    #gzip  on;\n    gzip on;\n    gzip_vary on;\n    gzip_buffers 16 8k;\n    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/jpeg image/gif image/png application/x-protobuf application/octet-stream;\n\n    include /etc/nginx/conf.d/*.conf;\n\nserver {  \n    listen 80;  \n    listen  [::]:80;   \n    server_name 192.168.104.128; \n    root /usr/share/nginx/html;  \n    index index.html;  \n    location / {\n        #add_header Access-Control-Max-Age 1800;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-Ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        #proxy_set_header Upgrade $http_upgrade;\n        #proxy_set_header Connection "upgrade";\n        proxy_pass http://192.168.104.128:9001/;\n    }\n\n    location /docloudresource {\n       alias /usr/share/nginx/html/docloudresource;\n       index  index.html index.htm;\n    }\n\n}\n\n\n}\n\n')])])]),s("h2",{attrs:{id:"路径位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径位置"}},[e._v("#")]),e._v(" 路径位置")]),e._v(" "),s("ul",[s("li",[e._v("配置文件目录："),s("code",[e._v("/etc/nginx/")])]),e._v(" "),s("li",[e._v("默认虚拟主机配置目录："),s("code",[e._v("/etc/nginx/conf.d/")])]),e._v(" "),s("li",[e._v("主要可执行文件路径："),s("code",[e._v("/usr/sbin/nginx")])]),e._v(" "),s("li",[e._v("Nginx 根目录："),s("code",[e._v("/usr/share/nginx/")])]),e._v(" "),s("li",[e._v("HTML 默认根目录："),s("code",[e._v("/usr/share/nginx/html/")])]),e._v(" "),s("li",[e._v("日志文件目录："),s("code",[e._v("/var/log/nginx/")])]),e._v(" "),s("li",[e._v("临时文件目录："),s("code",[e._v("/var/lib/nginx/tmp/")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);