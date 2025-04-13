(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{517:function(t,a,s){"use strict";s.r(a);var e=s(2),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-查看服务相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看服务相关"}},[t._v("#")]),t._v(" 1 查看服务相关")]),t._v(" "),a("p",[a("strong",[t._v("所有进程的详细信息")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ps -ef\n")])])]),a("p",[a("strong",[t._v("详细的格式显示所有进程的信息")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ps aux  \n//包括 CPU 和内存占用等\n")])])]),a("p",[a("strong",[t._v("查看某个服务")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ps -ef|grep <server_name>\n\nroot: 进程的用户名\n15804: 进程的 ID\n8507: 父进程的 ID\n0: 进程的优先级\n15:05: 进程的启动时间\npts/0: 进程所在的终端\n00:00:00: 进程的 CPU 使用时间\nsudo nohup ./elasticsearch: 进程的命令行（包括可执行文件路径和参数）\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2023/12/18/MePDi8o35TyxVUc.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("查看所有正在运行的服务")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ps -ef | grep -v grep | grep -v bash | awk '{print $1,$NF}' | sort -u\n")])])]),a("p",[a("strong",[t._v("Java相关：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("可以查看Java进程\njps -l \n")])])]),a("p",[a("strong",[t._v("top命令")])]),t._v(" "),a("p",[t._v("实时动态地显示当前系统中正在运行的进程和系统性能。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("top\n")])])]),a("h2",{attrs:{id:"_2-修改服务状态相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改服务状态相关"}},[t._v("#")]),t._v(" 2 修改服务状态相关")]),t._v(" "),a("p",[a("strong",[t._v("kill终止")])]),t._v(" "),a("p",[a("code",[t._v("kill")]),t._v(" 命令将发送 TERM 信号，这会请求进程正常退出。如果进程无法响应 TERM 信号，则可以使用 KILL 信号强制终止进程。例如，要使用 KILL 信号终止进程 ID 15804 的进程，可以执行以下命令：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kill -9 15804\n")])])]),a("p",[a("strong",[t._v("后台运行nohup")])]),t._v(" "),a("p",[t._v("nohup：在后台运行命令，并忽略 SIGHUP 信号（通常用于长时间运行的进程）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nohup <command> &\n例子：nohup java -jar demo.jar &\n")])])]),a("h2",{attrs:{id:"_3-安装-gcc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-gcc"}},[t._v("#")]),t._v(" 3 安装 Gcc")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo yum install gcc\n")])])]),a("h2",{attrs:{id:"_4-bash-netstat-未找到命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-bash-netstat-未找到命令"}},[t._v("#")]),t._v(" 4 -bash: netstat: 未找到命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" yum -y install net-tools\n")])])]),a("h2",{attrs:{id:"_5-开放、关闭端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-开放、关闭端口"}},[t._v("#")]),t._v(" 5 开放、关闭端口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//开放某个端口\nsudo firewall-cmd --zone=public --add-port=8080/tcp --permanent\nsudo firewall-cmd --reload\n//关闭某个端口\nsudo firewall-cmd --zone=public --remove-port=8080/tcp --permanent\nsudo firewall-cmd --reload\n")])])]),a("h2",{attrs:{id:"_6用户相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6用户相关"}},[t._v("#")]),t._v(" 6用户相关")]),t._v(" "),a("p",[t._v("要在Linux中创建用户并为其赋予sudo权限，您可以按照以下步骤进行操作：")]),t._v(" "),a("h3",{attrs:{id:"创建一个名为-docloud-的新用户。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个名为-docloud-的新用户。"}},[t._v("#")]),t._v(' 创建一个名为"docloud"的新用户。')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" adduser docloud\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-s")]),t._v(" /bin/bash 新用户名\n这里，-m 标志告诉系统为新用户创建一个家目录，-s 标志定义用户的默认shell，这里是 /bin/bash\n")])])]),a("h3",{attrs:{id:"设置密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[t._v("#")]),t._v(" 设置密码")]),t._v(" "),a("ol",[a("li",[t._v("接下来，您需要为该用户设置密码。执行以下命令并按照提示输入新密码：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" docloud\n")])])]),a("h3",{attrs:{id:"授予sudo权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授予sudo权限"}},[t._v("#")]),t._v(" 授予sudo权限")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo usermod -aG sudo 新用户名\n")])])]),a("h5",{attrs:{id:"修改visudo文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改visudo文件"}},[t._v("#")]),t._v(" 修改visudo文件")]),t._v(" "),a("p",[t._v('要为"docloud"用户授予sudo权限，请编辑sudoers文件。执行以下命令打开sudoers文件：')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" visudo\n")])])]),a("p",[t._v("在打开的文件中，找到类似于以下行的部分：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ALL:ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ALL\n")])])]),a("p",[t._v("在相同的行下面添加以下内容：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docloud "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ALL:ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ALL\n")])])]),a("h4",{attrs:{id:"验证新用户的sudo权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证新用户的sudo权限"}},[t._v("#")]),t._v(" 验证新用户的sudo权限")]),t._v(" "),a("p",[t._v("切换：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("su - 新用户名\n")])])]),a("p",[t._v("然后，尝试运行一个需要 "),a("code",[t._v("sudo")]),t._v(" 权限的命令，例如更新系统：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt update\n")])])]),a("h4",{attrs:{id:"使用时需要加上sudo如-sudo-rm-rf-aaa-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用时需要加上sudo如-sudo-rm-rf-aaa-txt"}},[t._v("#")]),t._v(" 使用时需要加上sudo如：sudo rm -rf aaa.txt")]),t._v(" "),a("h3",{attrs:{id:"删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[t._v("#")]),t._v(" 删除用户")]),t._v(" "),a("ol",[a("li",[t._v("确认用户的存在，可以通过以下命令来查看系统中所有的用户：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/passwd\n")])])]),a("ol",[a("li",[t._v("确定要删除的用户，并记录下该用户的用户名。")]),t._v(" "),a("li",[t._v("切换到root用户，或者使用具有sudo权限的用户。")]),t._v(" "),a("li",[t._v("执行以下命令，结束用户的sshd或shell进程：")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("ps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("用户名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \nkill "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ol",[a("li",[t._v("执行以下命令，删除用户及其主目录和邮件：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("userdel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("用户名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"命令总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令总结"}},[t._v("#")]),t._v(" 命令总结")]),t._v(" "),a("h2",{attrs:{id:"linux关机-重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux关机-重启"}},[t._v("#")]),t._v(" Linux关机,重启")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 关机\nshutdown -h now\n\n# 重启\nshutdown -r now\n")])])]),a("h2",{attrs:{id:"查看系统-cpu信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统-cpu信息"}},[t._v("#")]),t._v(" 查看系统,CPU信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看系统内核信息\nuname -a\n\n# 查看系统内核版本\ncat /proc/version\n\n# 查看当前用户环境变量\nenv\n\ncat /proc/cpuinfo\n\n# 查看有几个逻辑cpu, 包括cpu型号\ncat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c\n\n# 查看有几颗cpu,每颗分别是几核\ncat /proc/cpuinfo | grep physical | uniq -c\n\n# 查看当前CPU运行在32bit还是64bit模式下, 如果是运行在32bit下也不代表CPU不支持64bit\ngetconf LONG_BIT\n\n# 结果大于0, 说明支持64bit计算. lm指long mode, 支持lm则是64bit\ncat /proc/cpuinfo | grep flags | grep ' lm ' | wc -l\n")])])]),a("h2",{attrs:{id:"建立软连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立软连接"}},[t._v("#")]),t._v(" 建立软连接")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ln -s /usr/local/jdk1.8/ jdk\n")])])]),a("h2",{attrs:{id:"rpm相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpm相关"}},[t._v("#")]),t._v(" rpm相关")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看是否通过rpm安装了该软件\nrpm -qa | grep 软件名\n")])])]),a("h2",{attrs:{id:"sshkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sshkey"}},[t._v("#")]),t._v(" sshkey")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 创建sshkey\nssh-keygen -t rsa -C your_email@example.com\n\n#id_rsa.pub 的内容拷贝到要控制的服务器的 home/username/.ssh/authorized_keys 中,如果没有则新建(.ssh权限为700, authorized_keys权限为600)\n")])])]),a("h2",{attrs:{id:"命令重命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令重命名"}},[t._v("#")]),t._v(" 命令重命名")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 在各个用户的.bash_profile中添加重命名配置\nalias ll='ls -alF'\n")])])]),a("h2",{attrs:{id:"同步服务器时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步服务器时间"}},[t._v("#")]),t._v(" 同步服务器时间")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo ntpdate -u ntp.api.bz\n")])])]),a("h2",{attrs:{id:"后台运行命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台运行命令"}},[t._v("#")]),t._v(" 后台运行命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 后台运行,并且有nohup.out输出\nnohup xxx &\n\n# 后台运行, 不输出任何日志\nnohup xxx > /dev/null &\n\n# 后台运行, 并将错误信息做标准输出到日志中 \nnohup xxx >out.log 2>&1 &\n")])])]),a("h2",{attrs:{id:"强制活动用户退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制活动用户退出"}},[t._v("#")]),t._v(" 强制活动用户退出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 命令来完成强制活动用户退出.其中TTY表示终端名称\npkill -kill -t [TTY]\n")])])]),a("h2",{attrs:{id:"查看命令路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看命令路径"}},[t._v("#")]),t._v(" 查看命令路径")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("which <命令>\n")])])]),a("h2",{attrs:{id:"查看进程所有打开最大fd数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看进程所有打开最大fd数"}},[t._v("#")]),t._v(" 查看进程所有打开最大fd数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ulimit -n\n")])])]),a("h2",{attrs:{id:"配置dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置dns"}},[t._v("#")]),t._v(" 配置dns")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vim /etc/resolv.conf\n")])])]),a("h2",{attrs:{id:"nslookup-查看域名路由表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nslookup-查看域名路由表"}},[t._v("#")]),t._v(" nslookup,查看域名路由表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nslookup google.com\n")])])]),a("h2",{attrs:{id:"last-最近登录信息列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-最近登录信息列表"}},[t._v("#")]),t._v(" last, 最近登录信息列表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 最近登录的5个账号\nlast -n 5\n")])])]),a("h2",{attrs:{id:"设置固定ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置固定ip"}},[t._v("#")]),t._v(" 设置固定ip")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ifconfig em1  192.168.5.177 netmask 255.255.255.0\n")])])]),a("h2",{attrs:{id:"查看进程内加载的环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看进程内加载的环境变量"}},[t._v("#")]),t._v(" 查看进程内加载的环境变量")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 也可以去 cd /proc 目录下, 查看进程内存中加载的东西\nps eww -p  XXXXX(进程号)\n")])])]),a("h2",{attrs:{id:"查看进程树找到服务器进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看进程树找到服务器进程"}},[t._v("#")]),t._v(" 查看进程树找到服务器进程")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ps auwxf\n")])])]),a("h2",{attrs:{id:"查看进程启动路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看进程启动路径"}},[t._v("#")]),t._v(" 查看进程启动路径")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /proc/xxx(进程号)\nls -all\n# cwd对应的是启动路径\n")])])]),a("h2",{attrs:{id:"添加用户-配置sudo权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加用户-配置sudo权限"}},[t._v("#")]),t._v(" 添加用户, 配置sudo权限")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 新增用户\nuseradd 用户名\npasswd 用户名\n\n#增加sudo权限\nvim /etc/sudoers\n# 修改文件里面的\n# root    ALL=(ALL)       ALL\n# 用户名 ALL=(ALL)       ALL\n")])])]),a("h2",{attrs:{id:"强制关闭进程名包含xxx的所有进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制关闭进程名包含xxx的所有进程"}},[t._v("#")]),t._v(" 强制关闭进程名包含xxx的所有进程")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ps aux|grep xxx | grep -v grep | awk '{print $2}' | xargs kill -9\n")])])]),a("h1",{attrs:{id:"磁盘-文件-目录相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘-文件-目录相关操作"}},[t._v("#")]),t._v(" 磁盘,文件,目录相关操作")]),t._v(" "),a("h2",{attrs:{id:"vim操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim操作"}},[t._v("#")]),t._v(" vim操作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#normal模式下 g表示全局, x表示查找的内容, y表示替换后的内容\n:%s/x/y/g\n\n#normal模式下\n0  # 光标移到行首(数字0)\n$  # 光标移至行尾\nshift + g # 跳到文件最后\ngg # 跳到文件头\n\n# 显示行号\n:set nu\n\n# 去除行号\n:set nonu\n\n# 检索\n/xxx(检索内容)  # 从头检索, 按n查找下一个\n?xxx(检索内容)  # 从尾部检索\n")])])]),a("h2",{attrs:{id:"打开只读文件-修改后需要保存时-不用切换用户即可保存的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开只读文件-修改后需要保存时-不用切换用户即可保存的方式"}},[t._v("#")]),t._v(" 打开只读文件,修改后需要保存时(不用切换用户即可保存的方式)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 在normal模式下\n:w !sudo tee %\n")])])]),a("h2",{attrs:{id:"查看磁盘-文件目录基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘-文件目录基本信息"}},[t._v("#")]),t._v(" 查看磁盘, 文件目录基本信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看磁盘挂载情况\nmount\n\n# 查看磁盘分区信息\ndf\n\n# 查看目录及子目录大小\ndu -H -h\n\n# 查看当前目录下各个文件, 文件夹占了多少空间, 不会递归\ndu -sh *\n")])])]),a("h2",{attrs:{id:"wc命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wc命令"}},[t._v("#")]),t._v(" wc命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看文件里有多少行\nwc -l filename\n\n# 看文件里有多少个word\nwc -w filename\n\n# 文件里最长的那一行是多少个字\nwc -L filename\n\n# 统计字节数\nwc -c\n")])])]),a("h2",{attrs:{id:"常用压缩-解压缩命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用压缩-解压缩命令"}},[t._v("#")]),t._v(" 常用压缩, 解压缩命令")]),t._v(" "),a("h3",{attrs:{id:"压缩命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压缩命令"}},[t._v("#")]),t._v(" 压缩命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tar czvf xxx.tar 压缩目录\n\nzip -r xxx.zip 压缩目录\n")])])]),a("h3",{attrs:{id:"解压缩命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压缩命令"}},[t._v("#")]),t._v(" 解压缩命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tar zxvf xxx.tar\n\n# 解压到指定文件夹\ntar zxvf xxx.tar -C /xxx/yyy/\n\nunzip xxx.zip\n")])])]),a("h2",{attrs:{id:"变更文件所属用户-用户组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变更文件所属用户-用户组"}},[t._v("#")]),t._v(" 变更文件所属用户, 用户组")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown eagleye.eagleye xxx.log\n")])])]),a("h2",{attrs:{id:"cp-scp-mkdir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp-scp-mkdir"}},[t._v("#")]),t._v(" cp, scp, mkdir")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#复制\ncp xxx.log\n\n# 复制并强制覆盖同名文件\ncp -f xxx.log\n\n# 复制文件夹\ncp -r xxx(源文件夹) yyy(目标文件夹)\n\n# 远程复制\nscp -P ssh端口 username@10.10.10.101:/home/username/xxx /home/xxx\n\n# 级联创建目录\nmkdir -p /xxx/yyy/zzz\n\n# 批量创建文件夹, 会在test,main下都创建java, resources文件夹\nmkdir -p src/{test,main}/{java,resources}\n")])])]),a("h2",{attrs:{id:"比较两个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较两个文件"}},[t._v("#")]),t._v(" 比较两个文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("diff -u 1.txt 2.txt\n")])])]),a("h2",{attrs:{id:"日志输出的字节数-可以用作性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志输出的字节数-可以用作性能测试"}},[t._v("#")]),t._v(" 日志输出的字节数,可以用作性能测试")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 如果做性能测试, 可以每执行一次, 往日志里面输出 “.” , 这样日志中的字节数就是实际的性能测试运行的次数, 还可以看见实时速率.\ntail -f xxx.log | pv -bt\n")])])]),a("h2",{attrs:{id:"查看-去除特殊字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-去除特殊字符"}},[t._v("#")]),t._v(" 查看, 去除特殊字符")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看特殊字符\ncat -v xxx.sh\n\n# 去除特殊字符\nsed -i 's/^M//g’ env.sh  去除文件的特殊字符, 比如^M:  需要这样输入: ctrl+v+enter\n")])])]),a("h2",{attrs:{id:"处理因系统原因引起的文件中特殊字符的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理因系统原因引起的文件中特殊字符的问题"}},[t._v("#")]),t._v(" 处理因系统原因引起的文件中特殊字符的问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# 可以转换为该系统下的文件格式\ncat file.sh > file.sh_bak\n\n# 先将file.sh中文件内容复制下来然后运行, 然后粘贴内容, 最后ctrl + d 保存退出\ncat > file1.sh\n\n# 在vim中通过如下设置文件编码和文件格式\n:set fileencodings=utf-8 ，然后 w （存盘）一下即可转化为 utf8 格式，\n:set fileformat=unix\n\n# 在mac下使用dos2unix进行文件格式化\nfind . -name "*.sh" | xargs dos2unix\n')])])]),a("h2",{attrs:{id:"tee-重定向的同时输出到屏幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tee-重定向的同时输出到屏幕"}},[t._v("#")]),t._v(" tee, 重定向的同时输出到屏幕")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("awk ‘{print $0}’ xxx.log | tee test.log\n")])])]),a("h1",{attrs:{id:"检索相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检索相关"}},[t._v("#")]),t._v(" 检索相关")]),t._v(" "),a("h2",{attrs:{id:"grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[t._v("#")]),t._v(" grep")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 反向匹配, 查找不包含xxx的内容\ngrep -v xxx\n\n# 排除所有空行\ngrep -v '^/pre>\n\n# 返回结果 2,则说明第二行是空行\ngrep -n “^$” 111.txt    \n\n# 查询以abc开头的行\ngrep -n “^abc” 111.txt \n\n# 同时列出该词语出现在文章的第几行\ngrep 'xxx' -n xxx.log\n\n# 计算一下该字串出现的次数\ngrep 'xxx' -c xxx.log\n\n# 比对的时候，不计较大小写的不同\ngrep 'xxx' -i xxx.log\n")])])]),a("h2",{attrs:{id:"awk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[t._v("#")]),t._v(" awk")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 以':' 为分隔符,如果第五域有user则输出该行\nawk -F ':' '{if ($5 ~ /user/) print $0}' /etc/passwd \n\n# 统计单个文件中某个字符（串）(中文无效)出现的次数\nawk -v RS='character' 'END {print --NR}' xxx.txt\n")])])]),a("h2",{attrs:{id:"find检索命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find检索命令"}},[t._v("#")]),t._v(" find检索命令")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 在目录下找后缀是.mysql的文件\nfind /home/eagleye -name '*.mysql' -print\n\n# 会从 /usr 目录开始往下找，找最近3天之内存取过的文件。\nfind /usr -atime 3 –print\n\n# 会从 /usr 目录开始往下找，找最近5天之内修改过的文件。\nfind /usr -ctime 5 –print\n\n# 会从 /doc 目录开始往下找，找jacky 的、文件名开头是 j的文件。  \nfind /doc -user jacky -name 'j*' –print\n\n# 会从 /doc 目录开始往下找，找寻文件名是 ja 开头或者 ma开头的文件。\nfind /doc \\( -name 'ja*' -o- -name 'ma*' \\) –print\n\n#  会从 /doc 目录开始往下找，找到凡是文件名结尾为 bak的文件，把它删除掉。-exec 选项是执行的意思，rm 是删除命令，{ } 表示文件名，“\\;”是规定的命令结尾。 \nfind /doc -name '*bak' -exec rm {} \\;\n")])])]),a("h1",{attrs:{id:"网络相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络相关"}},[t._v("#")]),t._v(" 网络相关")]),t._v(" "),a("h2",{attrs:{id:"查看什么进程使用了该端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看什么进程使用了该端口"}},[t._v("#")]),t._v(" 查看什么进程使用了该端口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("lsof -i:port\n")])])]),a("h2",{attrs:{id:"获取本机ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取本机ip地址"}},[t._v("#")]),t._v(" 获取本机ip地址")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/sbin/ifconfig -a|grep inet|grep -v 127.0.0.1|grep -v inet6|awk '{print $2}'|tr -d \"addr:\"\n")])])]),a("h2",{attrs:{id:"iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iptables"}},[t._v("#")]),t._v(" iptables")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 查看iptables状态\nservice iptables status\n\n# 要封停一个ip\niptables -I INPUT -s ***.***.***.*** -j DROP\n\n# 要解封一个IP，使用下面这条命令：\niptables -D INPUT -s ***.***.***.*** -j DROP\n\n备注: 参数-I是表示Insert（添加），-D表示Delete（删除）。后面跟的是规则，INPUT表示入站，***.***.***.***表示要封停的IP，DROP表示放弃连接。\n\n#开启9090端口的访问\n/sbin/iptables -I INPUT -p tcp --dport 9090 -j ACCEPT \n\n# 防火墙开启、关闭、重启\n/etc/init.d/iptables status\n/etc/init.d/iptables start\n/etc/init.d/iptables stop\n/etc/init.d/iptables restart\n")])])]),a("h2",{attrs:{id:"nc命令-tcp调试利器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nc命令-tcp调试利器"}},[t._v("#")]),t._v(" nc命令, tcp调试利器")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#给某一个endpoint发送TCP请求,就将data的内容发送到对端\nnc 192.168.0.11 8000 < data.txt\n\n#nc可以当做服务器，监听某个端口号,把某一次请求的内容存储到received_data里\nnc -l 8000 > received_data\n\n#上边只监听一次，如果多次可以加上-k参数\nnc -lk 8000\n")])])]),a("h2",{attrs:{id:"tcpdump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcpdump"}},[t._v("#")]),t._v(" tcpdump")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# dump出本机12301端口的tcp包\ntcpdump -i em1 tcp port 12301 -s 1500 -w abc.pcap\n")])])]),a("h2",{attrs:{id:"跟踪网络路由路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跟踪网络路由路径"}},[t._v("#")]),t._v(" 跟踪网络路由路径")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# traceroute默认使用udp方式, 如果是-I则改成icmp方式\ntraceroute -I www.163.com\n\n# 从ttl第3跳跟踪\ntraceroute -M 3 www.163.com  \n\n# 加上端口跟踪\ntraceroute -p 8080 192.168.10.11\n")])])]),a("h2",{attrs:{id:"ss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ss"}},[t._v("#")]),t._v(" ss")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 显示本地打开的所有端口\nss -l \n\n# 显示每个进程具体打开的socket\nss -pl \n\n# 显示所有tcp socket\nss -t -a \n\n# 显示所有的UDP Socekt\nss -u -a \n\n# 显示所有已建立的SMTP连接\nss -o state established '( dport = :smtp or sport = :smtp )'  \n\n# 显示所有已建立的HTTP连接 \nss -o state established '( dport = :http or sport = :http )'  \n\n找出所有连接X服务器的进程\nss -x src /tmp/.X11-unix/*  \n\n列出当前socket统计信息\nss -s \n\n解释：netstat是遍历/proc下面每个PID目录，ss直接读/proc/net下面的统计信息。所以ss执行的时候消耗资源以及消耗的时间都比netstat少很多\n")])])]),a("h2",{attrs:{id:"netstat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[t._v("#")]),t._v(" netstat")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('# 输出每个ip的连接数，以及总的各个状态的连接数\nnetstat -n | awk \'/^tcp/ {n=split($(NF-1),array,":");if(n<=2)++S[array[(1)]];else++S[array[(4)]];++s[$NF];++N} END {for(a in S){printf("%-20s %s\\n", a, S[a]);++I}printf("%-20s %s\\n","TOTAL_IP",I);for(a in s) printf("%-20s %s\\n",a, s[a]);printf("%-20s %s\\n","TOTAL_LINK",N);}\'\n\n# 统计所有连接状态, \n# CLOSED：无连接是活动的或正在进行\n# LISTEN：服务器在等待进入呼叫\n# SYN_RECV：一个连接请求已经到达，等待确认\n# SYN_SENT：应用已经开始，打开一个连接\n# ESTABLISHED：正常数据传输状态\n# FIN_WAIT1：应用说它已经完成\n# FIN_WAIT2：另一边已同意释放\n# ITMED_WAIT：等待所有分组死掉\n# CLOSING：两边同时尝试关闭\n# TIME_WAIT：主动关闭连接一端还没有等到另一端反馈期间的状态\n# LAST_ACK：等待所有分组死掉\nnetstat -n | awk \'/^tcp/ {++state[$NF]} END {for(key in state) print key,"\\t",state[key]}\'\n\n# 查找较多time_wait连接\nnetstat -n|grep TIME_WAIT|awk \'{print $5}\'|sort|uniq -c|sort -rn|head -n20\n')])])]),a("h1",{attrs:{id:"监控linux性能命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控linux性能命令"}},[t._v("#")]),t._v(" 监控linux性能命令")]),t._v(" "),a("h2",{attrs:{id:"top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[t._v("#")]),t._v(" top")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("按大写的 F 或 O 键，然后按 a-z 可以将进程按照相应的列进行排序, 然后回车。而大写的 R 键可以将当前的排序倒转\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("列名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PPID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("父进程id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("RUSER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Real user name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("UID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程所有者的用户id")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("USER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程所有者的用户名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GROUP")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程所有者的组名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TTY")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("启动进程的终端名。不是从终端启动的进程则显示为 ?")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PR")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("优先级")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NI")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("nice值。负值表示高优先级，正值表示低优先级")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("P")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最后使用的CPU，仅在多CPU环境下有意义")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%CPU")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("上次更新到现在的CPU时间占用百分比")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TIME")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程使用的CPU时间总计，单位秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TIME+")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程使用的CPU时间总计，单位1/100秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("%MEM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程使用的物理内存百分比")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VIRT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SWAP")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程使用的虚拟内存中，被换出的大小，单位kb。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("RES")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CODE")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可执行代码占用的物理内存大小，单位kb")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DATA")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可执行代码以外的部分(数据段+栈)占用的物理内存大小，单位kb")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SHR")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("共享内存大小，单位kb")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("nFLT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("页面错误次数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("nDRT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最后一次写入到现在，被修改过的页面数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("S")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程状态。D=不可中断的睡眠状态,R=运行,S=睡眠,T=跟踪/停止,Z=僵尸进程")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("COMMAND")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("命令名/命令行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("WCHAN")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("若该进程在睡眠，则显示睡眠中的系统函数名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Flags")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("任务标志，参考 sched.h")])])])]),t._v(" "),a("h2",{attrs:{id:"dmesg-查看系统日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmesg-查看系统日志"}},[t._v("#")]),t._v(" dmesg,查看系统日志")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dmesg\n")])])]),a("h2",{attrs:{id:"iostat-磁盘io情况监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iostat-磁盘io情况监控"}},[t._v("#")]),t._v(" iostat,磁盘IO情况监控")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("iostat -xz 1\n\n# r/s, w/s, rkB/s, wkB/s：分别表示每秒读写次数和每秒读写数据量（千字节）。读写量过大，可能会引起性能问题。\n# await：IO操作的平均等待时间，单位是毫秒。这是应用程序在和磁盘交互时，需要消耗的时间，包括IO等待和实际操作的耗时。如果这个数值过大，可能是硬件设备遇到了瓶颈或者出现故障。\n# avgqu-sz：向设备发出的请求平均数量。如果这个数值大于1，可能是硬件设备已经饱和（部分前端硬件设备支持并行写入）。\n# %util：设备利用率。这个数值表示设备的繁忙程度，经验值是如果超过60，可能会影响IO性能（可以参照IO操作平均等待时间）。如果到达100%，说明硬件设备已经饱和。\n# 如果显示的是逻辑设备的数据，那么设备利用率不代表后端实际的硬件设备已经饱和。值得注意的是，即使IO性能不理想，也不一定意味这应用程序性能会不好，可以利用诸如预读取、写缓存等策略提升应用性能。\n")])])]),a("h2",{attrs:{id:"free-内存使用情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-内存使用情况"}},[t._v("#")]),t._v(" free,内存使用情况")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("free -m\n\neg:\n\n      total       used       free     shared    buffers     cached\nMem:  1002        769        232          0         62        421\n-/+   buffers/cache:          286        715\nSwap:          1153          0       1153\n\n第一部分Mem行:\ntotal 内存总数: 1002M\nused 已经使用的内存数: 769M\nfree 空闲的内存数: 232M\nshared 当前已经废弃不用,总是0\nbuffers Buffer 缓存内存数: 62M\ncached Page 缓存内存数:421M\n\n关系：total(1002M) = used(769M) + free(232M)\n\n第二部分(-/+ buffers/cache):\n(-buffers/cache) used内存数：286M (指的第一部分Mem行中的used – buffers – cached)\n(+buffers/cache) free内存数: 715M (指的第一部分Mem行中的free + buffers + cached)\n\n可见-buffers/cache反映的是被程序实实在在吃掉的内存,而+buffers/cache反映的是可以挪用的内存总数.\n\n第三部分是指交换分区\n")])])]),a("h2",{attrs:{id:"sar-查看网络吞吐状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sar-查看网络吞吐状态"}},[t._v("#")]),t._v(" sar,查看网络吞吐状态")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# sar命令在这里可以查看网络设备的吞吐率。在排查性能问题时，可以通过网络设备的吞吐量，判断网络设备是否已经饱和\nsar -n DEV 1\n\n#\n# sar命令在这里用于查看TCP连接状态，其中包括：\n# active/s：每秒本地发起的TCP连接数，既通过connect调用创建的TCP连接；\n# passive/s：每秒远程发起的TCP连接数，即通过accept调用创建的TCP连接；\n# retrans/s：每秒TCP重传数量；\n# TCP连接数可以用来判断性能问题是否由于建立了过多的连接，进一步可以判断是主动发起的连接，还是被动接受的连接。TCP重传可能是因为网络环境恶劣，或者服务器压力过大导致丢包\nsar -n TCP,ETCP 1\n")])])]),a("h2",{attrs:{id:"vmstat-给定时间监控cpu使用率-内存使用-虚拟内存交互-io读写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vmstat-给定时间监控cpu使用率-内存使用-虚拟内存交互-io读写"}},[t._v("#")]),t._v(" vmstat, 给定时间监控CPU使用率, 内存使用, 虚拟内存交互, IO读写")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 2表示每2秒采集一次状态信息, 1表示只采集一次(忽略既是一直采集)\nvmstat 2 1\n\neg:\nr b swpd free buff cache si so bi bo in cs us sy id wa\n1 0 0 3499840 315836 3819660 0 0 0 1 2 0 0 0 100 0\n0 0 0 3499584 315836 3819660 0 0 0 0 88 158 0 0 100 0\n0 0 0 3499708 315836 3819660 0 0 0 2 86 162 0 0 100 0\n0 0 0 3499708 315836 3819660 0 0 0 10 81 151 0 0 100 0\n1 0 0 3499732 315836 3819660 0 0 0 2 83 154 0 0 100 0\n")])])]),a("ul",[a("li",[t._v("r 表示运行队列(就是说多少个进程真的分配到CPU)，我测试的服务器目前CPU比较空闲，没什么程序在跑，当这个值超过了CPU数目，就会出现CPU瓶颈了。这个也和top的负载有关系，一般负载超过了3就比较高，超过了5就高，超过了10就不正常了，服务器的状态很危险。top的负载类似每秒的运行队列。如果运行队列过大，表示你的CPU很繁忙，一般会造成CPU使用率很高。")]),t._v(" "),a("li",[t._v("b 表示阻塞的进程,这个不多说，进程阻塞，大家懂的。")]),t._v(" "),a("li",[t._v("swpd 虚拟内存已使用的大小，如果大于0，表示你的机器物理内存不足了，如果不是程序内存泄露的原因，那么你该升级内存了或者把耗内存的任务迁移到其他机器。")]),t._v(" "),a("li",[t._v("free 空闲的物理内存的大小，我的机器内存总共8G，剩余3415M。")]),t._v(" "),a("li",[t._v("buff Linux/Unix系统是用来存储，目录里面有什么内容，权限等的缓存，我本机大概占用300多M")]),t._v(" "),a("li",[t._v("cache cache直接用来记忆我们打开的文件,给文件做缓冲，我本机大概占用300多M(这里是Linux/Unix的聪明之处，把空闲的物理内存的一部分拿来做文件和目录的缓存，是为了提高 程序执行的性能，当程序使用内存时，buffer/cached会很快地被使用。)")]),t._v(" "),a("li",[t._v("si 每秒从磁盘读入虚拟内存的大小，如果这个值大于0，表示物理内存不够用或者内存泄露了，要查找耗内存进程解决掉。我的机器内存充裕，一切正常。")]),t._v(" "),a("li",[t._v("so 每秒虚拟内存写入磁盘的大小，如果这个值大于0，同上。")]),t._v(" "),a("li",[t._v("bi 块设备每秒接收的块数量，这里的块设备是指系统上所有的磁盘和其他块设备，默认块大小是1024byte，我本机上没什么IO操作，所以一直是0，但是我曾在处理拷贝大量数据(2-3T)的机器上看过可以达到140000/s，磁盘写入速度差不多140M每秒")]),t._v(" "),a("li",[t._v("bo 块设备每秒发送的块数量，例如我们读取文件，bo就要大于0。bi和bo一般都要接近0，不然就是IO过于频繁，需要调整。")]),t._v(" "),a("li",[t._v("in 每秒CPU的中断次数，包括时间中断")]),t._v(" "),a("li",[t._v("cs 每秒上下文切换次数，例如我们调用系统函数，就要进行上下文切换，线程的切换，也要进程上下文切换，这个值要越小越好，太大了，要考虑调低线程或者进程的数目,例如在apache和nginx这种web服务器中，我们一般做性能测试时会进行几千并发甚至几万并发的测试，选择web服务器的进程可以由进程或者线程的峰值一直下调，压测，直到cs到一个比较小的值，这个进程和线程数就是比较合适的值了。系统调用也是，每次调用系统函数，我们的代码就会进入内核空间，导致上下文切换，这个是很耗资源，也要尽量避免频繁调用系统函数。上下文切换次数过多表示你的CPU大部分浪费在上下文切换，导致CPU干正经事的时间少了，CPU没有充分利用，是不可取的。")]),t._v(" "),a("li",[t._v("us 用户CPU时间，我曾经在一个做加密解密很频繁的服务器上，可以看到us接近100,r运行队列达到80(机器在做压力测试，性能表现不佳)。")]),t._v(" "),a("li",[t._v("sy 系统CPU时间，如果太高，表示系统调用时间长，例如是IO操作频繁。")]),t._v(" "),a("li",[t._v("id 空闲 CPU时间，一般来说，id + us + sy = 100,一般我认为id是空闲CPU使用率，us是用户CPU使用率，sy是系统CPU使用率。")]),t._v(" "),a("li",[t._v("wt 等待IO CPU时间。")])]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);a.default=r.exports}}]);