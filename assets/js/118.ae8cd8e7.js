(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{539:function(e,t,r){"use strict";r.r(t);var s=r(2),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"🎉docker-简介和安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🎉docker-简介和安装"}},[e._v("#")]),e._v(" 🎉Docker 简介和安装")]),e._v(" "),t("h3",{attrs:{id:"docker-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么"}},[e._v("#")]),e._v(" Docker 是什么")]),e._v(" "),t("p",[e._v("Docker 是一个应用打包、分发、部署的工具\n你也可以把它理解为一个轻量的虚拟机，它只虚拟你软件需要的运行环境，多余的一点都不要，\n而普通虚拟机则是一个完整而庞大的系统，包含各种不管你要不要的软件。")]),e._v(" "),t("blockquote",[t("p",[e._v("本文档课件配套 "),t("a",{attrs:{href:"https://www.bilibili.com/video/BV11L411g7U1",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频教程"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"跟普通虚拟机的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟普通虚拟机的对比"}},[e._v("#")]),e._v(" 跟普通虚拟机的对比")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("特性")]),e._v(" "),t("th",[e._v("普通虚拟机")]),e._v(" "),t("th",[e._v("Docker")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("跨平台")]),e._v(" "),t("td",[e._v("通常只能在桌面级系统运行，例如 Windows/Mac，无法在不带图形界面的服务器上运行")]),e._v(" "),t("td",[e._v("支持的系统非常多，各类 windows 和 Linux 都支持")])]),e._v(" "),t("tr",[t("td",[e._v("性能")]),e._v(" "),t("td",[e._v("性能损耗大，内存占用高，因为是把整个完整系统都虚拟出来了")]),e._v(" "),t("td",[e._v("性能好，只虚拟软件所需运行环境，最大化减少没用的配置")])]),e._v(" "),t("tr",[t("td",[e._v("自动化")]),e._v(" "),t("td",[e._v("需要手动安装所有东西")]),e._v(" "),t("td",[e._v("一个命令就可以自动部署好所需环境")])]),e._v(" "),t("tr",[t("td",[e._v("稳定性")]),e._v(" "),t("td",[e._v("稳定性不高，不同系统差异大")]),e._v(" "),t("td",[e._v("稳定性好，不同系统都一样部署方式")])])])]),e._v(" "),t("h3",{attrs:{id:"打包、分发、部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包、分发、部署"}},[e._v("#")]),e._v(" 打包、分发、部署")]),e._v(" "),t("p",[t("strong",[e._v("打包")]),e._v("：就是把你软件运行所需的依赖、第三方库、软件打包到一起，变成一个安装包\n"),t("strong",[e._v("分发")]),e._v("：你可以把你打包好的“安装包”上传到一个镜像仓库，其他人可以非常方便的获取和安装\n"),t("strong",[e._v("部署")]),e._v("：拿着“安装包”就可以一个命令运行起来你的应用，自动模拟出一摸一样的运行环境，不管是在 Windows/Mac/Linux。\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/kv7rlicu.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"docker-部署的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署的优势"}},[e._v("#")]),e._v(" Docker 部署的优势")]),e._v(" "),t("p",[e._v("常规应用开发部署方式：自己在 Windows 上开发、测试 --\x3e 到 Linux 服务器配置运行环境部署。")]),e._v(" "),t("blockquote",[t("p",[e._v("问题：我机器上跑都没问题，怎么到服务器就各种问题了")])]),e._v(" "),t("p",[e._v("用 Docker 开发部署流程：自己在 Windows 上开发、测试 --\x3e 打包为 Docker 镜像（可以理解为软件安装包） --\x3e 各种服务器上只需要一个命令部署好")]),e._v(" "),t("blockquote",[t("p",[e._v("优点：确保了不同机器上跑都是一致的运行环境，不会出现我机器上跑正常，你机器跑就有问题的情况。")])]),e._v(" "),t("p",[e._v("例如 "),t("a",{attrs:{href:"https://easydoc.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("易文档"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://svnbucket.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SVNBucket"),t("OutboundLink")],1),e._v(" 的私有化部署就是用 Docker，轻松应对客户的各种服务器。")]),e._v(" "),t("h3",{attrs:{id:"docker-通常用来做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-通常用来做什么"}},[e._v("#")]),e._v(" Docker 通常用来做什么")]),e._v(" "),t("ul",[t("li",[e._v("应用分发、部署，方便传播给他人安装。特别是开源软件和提供私有部署的应用")]),e._v(" "),t("li",[e._v("快速安装测试/学习软件，用完就丢（类似小程序），不把时间浪费在安装软件上。例如 Redis / MongoDB / ElasticSearch / ELK")]),e._v(" "),t("li",[e._v("多个版本软件共存，不污染系统，例如 Python2、Python3，Redis4.0，Redis5.0")]),e._v(" "),t("li",[e._v("Windows 上体验/学习各种 Linux 系统")])]),e._v(" "),t("h3",{attrs:{id:"重要概念-镜像、容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要概念-镜像、容器"}},[e._v("#")]),e._v(" 重要概念：镜像、容器")]),e._v(" "),t("p",[t("strong",[e._v("镜像")]),e._v("：可以理解为软件安装包，可以方便的进行传播和安装。\n"),t("strong",[e._v("容器")]),e._v("：软件安装后的状态，每个软件运行环境都是独立的、隔离的，称之为容器。")]),e._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("p",[e._v("桌面版：https://www.docker.com/products/docker-desktop\n服务器版：https://docs.docker.com/engine/install/#server")]),e._v(" "),t("h3",{attrs:{id:"启动报错解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动报错解决"}},[e._v("#")]),e._v(" 启动报错解决")]),e._v(" "),t("p",[e._v("报错截图\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/kvacsk82.png",alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("解决方法")]),e._v("：\n控制面板->程序->启用或关闭 windows 功能，开启 Windows 虚拟化和 Linux 子系统（WSL2)\n"),t("img",{attrs:{src:"D:%5CUsers%5Clichengcan%5CPictures%5Cimg%5Cdocker%5Ckvactn57.png",alt:"image.png"}})]),e._v(" "),t("p",[t("strong",[e._v("命令行安装 Linux 子系统（这步可能不需要，因为 docker 安装时有说自动安装 wsl）")]),e._v(" "),t("code",[e._v("wsl --install -d Ubuntu")])]),e._v(" "),t("blockquote",[t("p",[e._v("命令行安装可能太慢，你也可以打开微软商店 Microsoft Store 搜索 Linux 进行安装")])]),e._v(" "),t("p",[t("strong",[e._v("设置开机启动 Hypervisor")]),e._v(" "),t("code",[e._v("bcdedit /set hypervisorlaunchtype auto")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意要用管理员权限打开 PowerShell")])]),e._v(" "),t("p",[t("strong",[e._v("确保 BIOS 已开启虚拟化，下图检查是否已开启好")])]),e._v(" "),t("blockquote",[t("p",[e._v("如果是已禁用，请在开机时按 F2 进入 BIOS 开启一下，不会设置的可以网上搜索下自己主板的设置方法，Intel 和 AMD 的设置可能稍有不同")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/kvaf7ody.png",alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("出现下图错误，点击链接安装最新版本的 WSL2")]),e._v("\nhttps://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/kvajwvuw.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"镜像加速源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速源"}},[e._v("#")]),e._v(" 镜像加速源")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("镜像加速器")]),e._v(" "),t("th",[e._v("镜像加速器地址")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Docker 中国官方镜像")]),e._v(" "),t("td",[e._v("https://registry.docker-cn.com")])]),e._v(" "),t("tr",[t("td",[e._v("DaoCloud 镜像站")]),e._v(" "),t("td",[e._v("http://f1361db2.m.daocloud.io")])]),e._v(" "),t("tr",[t("td",[e._v("Azure 中国镜像")]),e._v(" "),t("td",[e._v("https://dockerhub.azk8s.cn")])]),e._v(" "),t("tr",[t("td",[e._v("科大镜像站")]),e._v(" "),t("td",[e._v("https://docker.mirrors.ustc.edu.cn")])]),e._v(" "),t("tr",[t("td",[e._v("阿里云")]),e._v(" "),t("td",[e._v("https://<your_code>.mirror.aliyuncs.com")])]),e._v(" "),t("tr",[t("td",[e._v("七牛云")]),e._v(" "),t("td",[e._v("https://reg-mirror.qiniu.com")])]),e._v(" "),t("tr",[t("td",[e._v("网易云")]),e._v(" "),t("td",[e._v("https://hub-mirror.c.163.com")])]),e._v(" "),t("tr",[t("td",[e._v("腾讯云")]),e._v(" "),t("td",[e._v("https://mirror.ccs.tencentyun.com")])])])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/l25jdwrn.png",alt:""}})]),e._v(" "),t("h1",{attrs:{id:"💻docker-快速安装软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💻docker-快速安装软件"}},[e._v("#")]),e._v(" 💻Docker 快速安装软件")]),e._v(" "),t("h3",{attrs:{id:"直接安装的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接安装的缺点"}},[e._v("#")]),e._v(" 直接安装的缺点")]),e._v(" "),t("ul",[t("li",[e._v("安装麻烦，可能有各种依赖，运行报错。例如：WordPress，ElasticSearch，Redis，ELK")]),e._v(" "),t("li",[e._v("可能对 Windows 并不友好，运行有各种兼容问题，软件只支持 Linux 上跑")]),e._v(" "),t("li",[e._v("不方便安装多版本软件，不能共存。")]),e._v(" "),t("li",[e._v("电脑安装了一堆软件，拖慢电脑速度。")]),e._v(" "),t("li",[e._v("不同系统和硬件，安装方式不一样")])]),e._v(" "),t("blockquote",[t("p",[e._v("本文档课件配套 "),t("a",{attrs:{href:"https://www.bilibili.com/video/BV11L411g7U1?p=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频教程"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"docker-安装的优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装的优点"}},[e._v("#")]),e._v(" Docker 安装的优点")]),e._v(" "),t("ul",[t("li",[e._v("一个命令就可以安装好，快速方便")]),e._v(" "),t("li",[e._v("有大量的镜像，可直接使用")]),e._v(" "),t("li",[e._v("没有系统兼容问题，Linux 专享软件也照样跑")]),e._v(" "),t("li",[e._v("支持软件多版本共存")]),e._v(" "),t("li",[e._v("用完就丢，不拖慢电脑速度")]),e._v(" "),t("li",[e._v("不同系统和硬件，只要安装好 Docker 其他都一样了，一个命令搞定所有")])]),e._v(" "),t("h3",{attrs:{id:"演示-docker-安装-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演示-docker-安装-redis"}},[e._v("#")]),e._v(" 演示 Docker 安装 Redis")]),e._v(" "),t("p",[e._v("Redis 官网：https://redis.io/")]),e._v(" "),t("blockquote",[t("p",[e._v("官网下载安装教程只有源码安装方式，没有 Windows 版本。想要自己安装 windows 版本需要去找别人编译好的安装包。")])]),e._v(" "),t("p",[e._v("Docker 官方镜像仓库查找 Redis ：https://hub.docker.com/\n"),t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/kv8zs4qr.png",alt:""}})]),e._v(" "),t("p",[e._v("一个命令跑起来："),t("code",[e._v("docker run -d -p 6379:6379 --name redis redis:latest")]),e._v("\n命令参考：https://docs.docker.com/engine/reference/commandline/run/")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/lichengcan/images/main/kv8zy4xn.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"安装-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-wordpress"}},[e._v("#")]),e._v(" 安装 Wordpress")]),e._v(" "),t("p",[e._v("docker-compose.yml")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("version: '3.1'\n\nservices:\n\n  wordpress:\n    image: wordpress\n    restart: always\n    ports:\n      - 8080:80\n    environment:\n      WORDPRESS_DB_HOST: db\n      WORDPRESS_DB_USER: exampleuser\n      WORDPRESS_DB_PASSWORD: examplepass\n      WORDPRESS_DB_NAME: exampledb\n    volumes:\n      - wordpress:/var/www/html\n\n  db:\n    image: mysql:5.7\n    restart: always\n    environment:\n      MYSQL_DATABASE: exampledb\n      MYSQL_USER: exampleuser\n      MYSQL_PASSWORD: examplepass\n      MYSQL_RANDOM_ROOT_PASSWORD: '1'\n    volumes:\n      - db:/var/lib/mysql\n\nvolumes:\n  wordpress:\n  db:\n")])])]),t("h3",{attrs:{id:"安装-elk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-elk"}},[e._v("#")]),e._v(" 安装 ELK")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker run -p 5601:5601 -p 9200:9200 -p 5044:5044 -it --name elk sebp/elk\n")])])]),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#global-configuration-options-with-wslconfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("内存不够解决方法"),t("OutboundLink")],1),e._v("\n转到用户目录 "),t("code",[e._v("cd ~")]),e._v("，路径类似这个："),t("code",[e._v("C:\\Users\\<UserName>")]),e._v("\n创建 "),t("code",[e._v(".wslconfig")]),e._v(" 文件填入以下内容")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[wsl2]\nmemory=10GB # Limits VM memory in WSL 2 to 4 GB\nprocessors=2 # Makes the WSL 2 VM use two virtual processors\n")])])]),t("p",[e._v("生效配置，命令行运行 "),t("code",[e._v("wsl --shutdown")])]),e._v(" "),t("h3",{attrs:{id:"更多相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多相关命令"}},[e._v("#")]),e._v(" 更多相关命令")]),e._v(" "),t("p",[t("code",[e._v("docker ps")]),e._v(" 查看当前运行中的容器\n"),t("code",[e._v("docker images")]),e._v(" 查看镜像列表\n"),t("code",[e._v("docker rm container-id")]),e._v(" 删除指定 id 的容器\n"),t("code",[e._v("docker stop/start container-id")]),e._v(" 停止/启动指定 id 的容器\n"),t("code",[e._v("docker rmi image-id")]),e._v(" 删除指定 id 的镜像\n"),t("code",[e._v("docker volume ls")]),e._v(" 查看 volume 列表\n"),t("code",[e._v("docker network ls")]),e._v(" 查看网络列表")]),e._v(" "),t("h1",{attrs:{id:"docker常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[e._v("#")]),e._v(" docker常用命令")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("查 docker search tomcat")])]),e._v(" "),t("li",[t("p",[e._v("拉 docker pull name (拉取查询出来的镜像)")])]),e._v(" "),t("li",[t("p",[e._v("查看自己安装的镜像docker images")])]),e._v(" "),t("li",[t("p",[e._v("查看容器 docker ps -a //-a 查看所有")])]),e._v(" "),t("li",[t("p",[e._v("启动 docker run --name -d -p 8081:8080 tomcat  // -d后台运行 -p指定端口 -name 指定名称")])]),e._v(" "),t("li",[t("p",[e._v("docker rm name 删除容器服务")])]),e._v(" "),t("li",[t("p",[e._v("进入容器：docker exec -it mysql bash")])]),e._v(" "),t("li",[t("p",[e._v("将主机/www/runoob目录拷贝到容器96f7f14e99ab的/www目录下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker cp /www/runoob 96f7f14e99ab:/www/\n")])])])])]),e._v(" "),t("h1",{attrs:{id:"💻docker多容器通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💻docker多容器通信"}},[e._v("#")]),e._v(" 💻Docker多容器通信")]),e._v(" "),t("p",[e._v("要想多容器之间互通，从 Web 容器访问 Redis 容器，我们只需要把他们放到同个网络中就可以了。")]),e._v(" "),t("blockquote",[t("p",[e._v("文档参考：https://docs.docker.com/engine/reference/commandline/network/")])]),e._v(" "),t("h3",{attrs:{id:"创建虚拟网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟网络"}},[e._v("#")]),e._v(" 创建虚拟网络")]),e._v(" "),t("blockquote",[t("p",[e._v("docker network create test-net")])]),e._v(" "),t("h3",{attrs:{id:"重新运行redis-命别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新运行redis-命别名"}},[e._v("#")]),e._v(" 重新运行redis ，命别名")]),e._v(" "),t("p",[e._v("docker run -d --name redis --network test-net --network-alias redis redis:latest")]),e._v(" "),t("blockquote",[t("p",[e._v("--name 项目命名")]),e._v(" "),t("p",[e._v("--network 指定网络")]),e._v(" "),t("p",[e._v("--network-alias 别名")]),e._v(" "),t("p",[e._v("redis redis:latest 运行redis最新版本")])]),e._v(" "),t("h3",{attrs:{id:"运行web项目-使用同个网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行web项目-使用同个网络"}},[e._v("#")]),e._v(" 运行web项目，使用同个网络")]),e._v(" "),t("p",[e._v("docker run -p 8080:8080 --name test -v D:/test:/app --network test-net -d test:v1")]),e._v(" "),t("blockquote",[t("p",[e._v("docker run -p 指定端口")]),e._v(" "),t("p",[e._v("--name test 项目命名")]),e._v(" "),t("p",[e._v("D:/test:/app 项目路径")]),e._v(" "),t("p",[e._v("--network test-net 指定的同一个网络（redis也运行在test-net）")]),e._v(" "),t("p",[e._v("-d 后台运行")]),e._v(" "),t("p",[e._v("test:v1 指定镜像")])]),e._v(" "),t("h2",{attrs:{id:"通过docker-compose配置文件进行通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过docker-compose配置文件进行通信"}},[e._v("#")]),e._v(" 通过docker—compose配置文件进行通信")]),e._v(" "),t("blockquote",[t("p",[e._v("使用docker-compose 能出来一堆帮助信息代表安装成功")])]),e._v(" "),t("ul",[t("li",[e._v("如果你是安装的桌面版 Docker，不需要额外安装，已经包含了。")]),e._v(" "),t("li",[e._v("如果是没图形界面的服务器版 Docker，你需要单独安装 "),t("a",{attrs:{href:"https://docs.docker.com/compose/install/#install-compose-on-linux-systems",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装文档"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("运行"),t("code",[e._v("docker-compose")]),e._v("检查是否安装成功")])]),e._v(" "),t("h3",{attrs:{id:"编写脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写脚本"}},[e._v("#")]),e._v(" 编写脚本")]),e._v(" "),t("p",[e._v("要把项目依赖的多个服务集合到一起，我们需要编写一个"),t("code",[e._v("docker-compose.yml")]),e._v("文件，描述依赖哪些服务\n参考文档：https://docs.docker.com/compose/")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('version: "3.7"\n\nservices:\n  app:\n    build: ./\n    ports:\n      - 80:8080\n    volumes:\n      - ./:/app\n    environment:\n      - TZ=Asia/Shanghai\n  redis:\n    image: redis:5.0.13\n    volumes:\n      - redis:/data\n    environment:\n      - TZ=Asia/Shanghai\n\nvolumes:\n  redis:\n')])])]),t("h3",{attrs:{id:"跑起来"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跑起来"}},[e._v("#")]),e._v(" 跑起来")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("docker-compose.yml")]),e._v(" 文件所在目录，执行："),t("code",[e._v("docker-compose up")]),e._v("就可以跑起来了。\n命令参考：https://docs.docker.com/compose/reference/up/")]),e._v(" "),t("p",[e._v("在后台运行只需要加一个 -d 参数"),t("code",[e._v("docker-compose up -d")]),e._v("\n查看运行状态："),t("code",[e._v("docker-compose ps")]),e._v("\n停止运行："),t("code",[e._v("docker-compose stop")]),e._v("\n重启："),t("code",[e._v("docker-compose restart")]),e._v("\n重启单个服务："),t("code",[e._v("docker-compose restart service-name")]),e._v("\n进入容器命令行："),t("code",[e._v("docker-compose exec service-name sh")]),e._v("\n查看容器运行log："),t("code",[e._v("docker-compose logs [service-name]")])]),e._v(" "),t("h2",{attrs:{id:"docker-tomcat-404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-tomcat-404"}},[e._v("#")]),e._v(" docker-tomcat-404")]),e._v(" "),t("p",[e._v("原因：没有关闭防火墙或者Tomcat的webapps文件夹下没有东西")]),e._v(" "),t("p",[e._v("排查和解决")]),e._v(" "),t("ol",[t("li",[e._v("启动Tomcat容器")]),e._v(" "),t("li",[e._v("docker run -d -p 8888:8080 tomcat")])]),e._v(" "),t("h4",{attrs:{id:"查看已经启动的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看已经启动的容器"}},[e._v("#")]),e._v(" 查看已经启动的容器")]),e._v(" "),t("p",[e._v("docker ps")]),e._v(" "),t("h4",{attrs:{id:"使用8888端口访问tomcat失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用8888端口访问tomcat失败"}},[e._v("#")]),e._v(" 使用8888端口访问Tomcat失败")]),e._v(" "),t("p",[e._v("先查看防火墙状况\nservice firewalld status")]),e._v(" "),t("h4",{attrs:{id:"如果防火墙没关闭-先关闭防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果防火墙没关闭-先关闭防火墙"}},[e._v("#")]),e._v(" 如果防火墙没关闭，先关闭防火墙")]),e._v(" "),t("p",[e._v("service firewalld stop")]),e._v(" "),t("p",[e._v("防火墙关闭时，防火墙的状态如下")]),e._v(" "),t("h4",{attrs:{id:"确定防火墙关闭但访问tomcat还是失败之后-使用如下命名进入tomcat的目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定防火墙关闭但访问tomcat还是失败之后-使用如下命名进入tomcat的目录"}},[e._v("#")]),e._v(" 确定防火墙关闭但访问Tomcat还是失败之后，使用如下命名进入Tomcat的目录")]),e._v(" "),t("p",[e._v("docker exec -it c110e319cdd1(启动的Tomcat容器的容器id) /bin/bash")]),e._v(" "),t("h4",{attrs:{id:"使用命令查看当前文件夹内的所有文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用命令查看当前文件夹内的所有文件"}},[e._v("#")]),e._v(" 使用命令查看当前文件夹内的所有文件")]),e._v(" "),t("p",[e._v("ls -l")]),e._v(" "),t("p",[e._v("进入webapps文件夹下\ncd webapps")]),e._v(" "),t("p",[e._v("查看webapps下的文件\nls -l")]),e._v(" "),t("p",[e._v("显示total 0，问题就出在这里，webapps文件夹下没有东西\n返回上一级目录\ncd ..")]),e._v(" "),t("p",[e._v("删除webapps文件夹（-r是级联删除,-f是强制删除，不然文件夹是删不掉的）\nrm -rf webapps")]),e._v(" "),t("p",[e._v("将webapps.dist文件夹下的内容复制到给webapps文件夹\nrm webapps.dist webapps")]),e._v(" "),t("p",[e._v("此时再访问Tomcat，成功")])])}),[],!1,null,null,null);t.default=a.exports}}]);