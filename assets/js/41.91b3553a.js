(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{461:function(t,a,s){"use strict";s.r(a);var r=s(2),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-java打包后没有主属性清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-java打包后没有主属性清单"}},[t._v("#")]),t._v(" 1.Java打包后没有主属性清单")]),t._v(" "),a("p",[t._v("问题背景：在使用SpringBoot架构搭建父子工程时，使用IDEA可以正常启动，但打成jar包后使用jar方式启动时，会报错xx.jar中没有主清单属性。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("java -jar .\\HuangHeLou-basic-0.0.1-SNAPSHOT.jar\n.\\HuangHeLou-basic-0.0.1-SNAPSHOT.jar中没有主清单属性\n")])])]),a("blockquote",[a("p",[t._v("原因：原因主要是在使用jar方式启动时，没有指定Main-Class，导致启动时找不到主方法，使得SpringBoot项目无法启动。")])]),t._v(" "),a("p",[t._v("尝试解压jar包，进入META-INF目录，查看MANIFEST.MF文件，里面确实没有指定Start-Class和Main-Class")]),t._v(" "),a("blockquote",[a("p",[t._v("解决方案：指定Main-Class即可。在子工程的pom.xml文件中添加配置")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maven"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("maven"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compiler"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UTF")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("maven"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("artifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("spring"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("boot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 对应springboot版本"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mainClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataojo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("huangheloubasic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("HuangHeLouBasicApplication")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mainClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("configuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("execution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("repackage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("repackage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("goals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("execution"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("executions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-打包选择环境-dev-prod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-打包选择环境-dev-prod"}},[t._v("#")]),t._v(" 2 打包选择环境 dev prod")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yml配置文件\nspring:\n  profiles:\n    active: prod\npom文件    \n    \n    <profiles>\n        <profile>\n            <id>dev</id>\n            <properties>\n                <profileActive>dev</profileActive>\n            </properties>\n            <activation>\n                <activeByDefault>false</activeByDefault>\n            </activation>\n        </profile>\n\n        <profile>\n            <id>prod</id>\n            <properties>\n                <profileActive>prod</profileActive>\n            </properties>\n            <activation>\n                <activeByDefault>true</activeByDefault>\n            </activation>\n        </profile>\n    </profiles>\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);