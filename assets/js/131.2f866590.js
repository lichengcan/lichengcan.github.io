(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{546:function(n,e,t){"use strict";t.r(e);var r=t(2),a=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"rabbitmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[n._v("#")]),n._v(" rabbitmq")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/tirster/article/details/121938987",target:"_blank",rel:"noopener noreferrer"}},[n._v("安装参考链接"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.cn/post/7025769688302878756",target:"_blank",rel:"noopener noreferrer"}},[n._v("springboot整合rabbitmq参考"),e("OutboundLink")],1)]),n._v(" "),e("h3",{attrs:{id:"_1-依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖"}},[n._v("#")]),n._v(" 1 依赖")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\x3c!--        rabbitMQ--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-amqp</artifactId>\n</dependency>\n")])])]),e("h3",{attrs:{id:"_2-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件"}},[n._v("#")]),n._v(" 2 配置文件")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# 配置rabbitmq服务\n  rabbitmq:\n    username: guest\n    password: guest\n    virtual-host: test\n    host: localhost\n    port: 5672\n")])])]),e("h3",{attrs:{id:"_3-生产者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-生产者"}},[n._v("#")]),n._v(" 3 生产者")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package com.example.community.controller;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.amqp.rabbit.core.RabbitTemplate;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @author: lichengcan\n * @date: 2023-07-04 17:26\n * @description rabbitmq 生产者\n **/\n@Slf4j\n@RestController\n@RequestMapping("/firm")\npublic class SendFirmMsgController {\n\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n    /**\n     * 1、定义交换机\n     */\n    private String exchangeName = "exchange_firm";\n    // 2、定义路由key\n    private String routeKey1 = "爱国.小灿";\n    private String routeKey2 = "哈哈.小峰";\n    private String routeKey3 = "动作.小花";\n    private String routeKey4 = "喜剧.小艹";\n\n    @PostMapping("/send")\n    public void sendMsg(){\n\n        //发送信息到指定的交换器\n        //并使用路由键进行匹配\n        for (int i = 1; i <=50; i++) {\n            // @params1: 交换机名称\n            // @params2: 表示消息的路由键\n            // @params3: 表示要发送的消息内容\n            if(i%4==0){\n                rabbitTemplate.convertAndSend(exchangeName,routeKey1,("爱国.小灿，说第"+i+"遍。").getBytes());\n            }else if(i%4 ==1){\n                rabbitTemplate.convertAndSend(exchangeName,routeKey2,("哈哈.小峰，说第"+i+"遍。").getBytes());\n            }else if(i%4 ==2){\n                rabbitTemplate.convertAndSend(exchangeName,routeKey3,("动作.小花，说第"+i+"遍。").getBytes());\n            }else if(i%4 ==3){\n                rabbitTemplate.convertAndSend(exchangeName,routeKey4,("喜剧.小艹，说第"+i+"遍。").getBytes());\n            }\n            log.info("发送第"+i);\n        }\n    }\n}\n')])])]),e("h3",{attrs:{id:"_4-消费者"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-消费者"}},[n._v("#")]),n._v(" 4 消费者")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package com.example.community.controller;\n\nimport lombok.extern.slf4j.Slf4j;\nimport org.springframework.amqp.core.ExchangeTypes;\nimport org.springframework.amqp.rabbit.annotation.*;\nimport org.springframework.web.bind.annotation.RestController;\n\n/**\n * @author: lichengcan\n * @date: 2023-07-04 17:26\n * @description rabbitmq 消费者\n **/\n@Slf4j\n@RestController\npublic class MsgController {\n\n    @RabbitListener(bindings = @QueueBinding(\n            // 指定队列名字\n            value = @Queue(value = "queue1",autoDelete = "false"),\n            // 指定交换机的名字\n            exchange = @Exchange(value = "exchange_firm",type = ExchangeTypes.TOPIC)\n    ))\n    @RabbitHandler\n    public void consumrmsg1(String msg){\n        log.info(" --------------\x3e" + msg);\n    }\n\n    @RabbitListener(bindings = @QueueBinding(value = @Queue(value = "queue2",autoDelete = "false"),exchange = @Exchange(value = "exchange_firm",type = ExchangeTypes.TOPIC)))\n    @RabbitHandler\n    public void consumrmsg2(String msg){\n        log.info(" --------------\x3e" + msg);\n    }\n\n    @RabbitListener(bindings = @QueueBinding(value = @Queue(value = "queue3",autoDelete = "false"),exchange = @Exchange(value = "exchange_firm",type = ExchangeTypes.TOPIC)))\n    @RabbitHandler\n    public void consumrmsg3(String msg,String id){\n        log.info(" --------------\x3e" + msg+"------------"+id);\n    }\n\n    @RabbitListener(bindings = @QueueBinding(value = @Queue(value = "queue4",autoDelete = "false"),exchange = @Exchange(value = "exchange_firm",type = ExchangeTypes.TOPIC)))\n    @RabbitHandler\n    public void consumrmsg4(String msg){\n        log.info(" --------------\x3e" + msg);\n    }\n\n\n    /**\n     * 手动消费\n     */\n    public void consumrmsg6(String msg){\n\n    }\n}\n')])])]),e("h3",{attrs:{id:"_5-消费者-生产者的绑定关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-消费者-生产者的绑定关系"}},[n._v("#")]),n._v(" 5 消费者-生产者的绑定关系")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package com.example.community.rabbitmq;\nimport org.springframework.amqp.core.Binding;\nimport org.springframework.amqp.core.BindingBuilder;\nimport org.springframework.amqp.core.Queue;\nimport org.springframework.amqp.core.TopicExchange;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n/**\n * 主题消费类型配置\n * @Author xiaolei\n * @Date 2021/10/29 11:03\n **/\n@Configuration\npublic class TopicRabbitConfig {\n\n    /**\n     *  给队列取名字\n     * @return\n     */\n    @Bean\n    public Queue firstQueue() {\n        // durable:是否持久化,默认是false,持久化队列：会被存储在磁盘上，当消息代理重启时仍然存在，暂存队列：当前连接有效\n        // exclusive:默认也是false，只能被当前创建的连接使用，而且当连接关闭后队列即被删除。此参考优先级高于durable\n        // autoDelete:是否自动删除，当没有生产者或者消费者使用此队列，该队列会自动删除。\n        //   return new Queue("TestDirectQueue",true,true,false);\n\n        //一般设置一下队列的持久化就好,其余两个就是默认false\n        return new Queue ("queue1",true);\n    }\n    @Bean\n    public Queue SecondQueue() {\n        return new Queue ("queue2",true);\n    }\n\n    @Bean\n    public Queue ThreeQueue() {\n        return new Queue ("queue3",true);\n    }\n\n    @Bean\n    public Queue FourQueue() {\n        return new Queue ("queue4",true);\n    }\n\n\n    /**\n     * 给交换机取名\n     * @return\n     */\n    @Bean\n    public TopicExchange topicExchange(){\n        return new TopicExchange("exchange_firm",true,false);\n    }\n\n    /**\n     * 绑定键可以使用通配符 * 和 # 进行模糊匹配，其中 * 匹配一个词，# 匹配零个或多个词\n     * @return\n     */\n    @Bean\n    public Binding bindingTopic1(){\n        return BindingBuilder.bind(firstQueue()).to(topicExchange()).with("*.小灿");\n    }\n\n    @Bean\n    public Binding bindingTopic2(){\n        return BindingBuilder.bind(SecondQueue()).to(topicExchange()).with("哈哈.小峰");\n    }\n\n    @Bean\n    public Binding bindingTopic3(){\n        return BindingBuilder.bind(ThreeQueue()).to(topicExchange()).with("动作.小花");\n    }\n    @Bean\n    public Binding bindingTopic4(){\n        return BindingBuilder.bind(FourQueue()).to(topicExchange()).with("#.小艹");\n    }\n\n}\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);