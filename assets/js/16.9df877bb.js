(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{433:function(e,t,n){"use strict";n.r(t);var r=n(2),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("仓库地址："),t("a",{attrs:{href:"https://gitee.com/lichengcan0228/spring-boot-labs/tree/dev/lab-RestTemplate",target:"_blank",rel:"noopener noreferrer"}},[e._v("RestTemplate"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"注入resttemplate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注入resttemplate"}},[e._v("#")]),e._v(" 注入RestTemplate")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Configuration\npublic class RestTemplateConfig {\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n")])])]),t("h2",{attrs:{id:"getforentity方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getforentity方法"}},[e._v("#")]),e._v(" GetForEntity方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package com.cc.resttemplate.controller;\n\nimport com.cc.resttemplate.domain.User;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.client.RestTemplate;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * @author: lichengcan\n * @date: 2023-12-28 11:27\n * @description GetForEntity\n **/\n\n@RestController\n@RequestMapping(value = "/getForEntity")\npublic class GetForEntityController {\n\n    @Autowired\n    RestTemplate restTemplate;\n\n    /**\n     * 使用键值对的形式\n     */\n    @GetMapping("/userKeyValue")\n    public User userKeyValue(@RequestParam Long id, @RequestParam String name) {\n        return restTemplate.getForEntity("http://localhost:8080/userKeyValue?id={id}&name={name}", User.class, id,name).getBody();\n    }\n\n    /**\n     * 使用Map的形式\n     */\n    @GetMapping("/userByMap")\n    public User userByMap(@RequestParam Long id, @RequestParam String name) {\n        Map<String, Object> requestParams = new HashMap<>(2);\n        requestParams.put("id", id);\n        requestParams.put("name", name);\n        return restTemplate.getForEntity("http://localhost:8080/userKeyValue?id={id}&name={name}", User.class, requestParams).getBody();\n    }\n\n    /**\n     * 无请求参数\n     * @return\n     */\n    @GetMapping("/userNoRequestParam")\n    public User userNoRequestParam() {\n        return restTemplate.getForEntity("http://localhost:8080/userKeyValue", User.class).getBody();\n    }\n}\n')])])]),t("h2",{attrs:{id:"exchange方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exchange方法"}},[e._v("#")]),e._v(" Exchange方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package com.cc.resttemplate.controller;\n\nimport com.cc.resttemplate.domain.User;\nimport com.cc.resttemplate.domain.Users;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.bind.annotation.*;\nimport org.springframework.web.client.RestTemplate;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * @author: lichengcan\n * @date: 2023-12-28 11:52\n * @description exchange\n **/\n@RestController\n@RequestMapping("/exchange")\npublic class ExchangeController {\n\n\n    @Autowired\n    RestTemplate restTemplate;\n\n\n    @GetMapping("/getUserKeyValue")\n    public User getUserKeyValue(Integer id, String name) {\n        final String url = "http://localhost:8080/userKeyValue?id={id}&name={name}";\n        return restTemplate.exchange(url, HttpMethod.GET, null, User.class, id, name).getBody();\n    }\n    \n\n    @PostMapping("/getUserDomain")\n    public User getUserDomain(@RequestBody(required = false) User user) {\n        String url = "http://localhost:8080/userDomain";\n        //请求头\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.APPLICATION_JSON);\n        headers.set("cc", "小灿12345");\n        HttpEntity<User> request = new HttpEntity<>(user, headers);\n        return restTemplate.exchange(url, HttpMethod.POST, request, User.class).getBody();\n    }\n\n    @PostMapping("/getUsersDomain")\n    public Users getUsersDomain() {\n        String url = "http://localhost:8080/usersDomain";\n        //请求参数\n        Users users = new Users();\n        Map<String, Object> user = new HashMap<>(2);\n        user.put("param1", "xxcan");\n        user.put("param2", "xx12345");\n        users.setId(12345L);\n        users.setMap(user);\n        //请求头\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.APPLICATION_JSON);\n        headers.set("cc", "小灿");\n        HttpEntity<Users> request = new HttpEntity<>(users,headers);\n        return restTemplate.exchange(url, HttpMethod.POST, request, Users.class).getBody();\n    }\n\n    @PostMapping("/getUserMap")\n    public Map getUserMap() {\n        String url = "http://localhost:8080/userMap";\n        //请求参数\n        Map<String, Object> users = new HashMap<>(2);\n        Map<String,Object> user = new HashMap<>(2);\n        user.put("name","灿灿");\n        user.put("id",555L);\n        users.put("param1", "xxcan");\n        users.put("param2", "xx12345");\n        users.put("user",user);\n        //请求头\n        HttpHeaders headers = new HttpHeaders();\n        headers.setContentType(MediaType.APPLICATION_JSON);\n        headers.set("cc", "小灿");\n        HttpEntity<Map> request = new HttpEntity<>(users,headers);\n        return restTemplate.exchange(url, HttpMethod.POST, request, Map.class).getBody();\n    }\n}\n')])])]),t("blockquote",[t("p",[e._v("上面使用POST时会报错HttpClientErrorException 的 UnsupportedMediaType 错误。该错误表示请求的媒体类型不受支持。服务器返回了状态码 415（Unsupported Media Type）")]),e._v(" "),t("p",[e._v("解决在header中添加：")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("HttpHeaders headers = new HttpHeaders();\nheaders.setContentType(MediaType.APPLICATION_JSON);\n")])])]),t("h2",{attrs:{id:"getforobject方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getforobject方法"}},[e._v("#")]),e._v(" GetForObject方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('package com.cc.resttemplate.controller;\n\nimport com.cc.resttemplate.domain.User;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport org.springframework.web.client.RestTemplate;\nimport org.springframework.web.util.UriComponents;\nimport org.springframework.web.util.UriComponentsBuilder;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.net.URI;\nimport java.util.HashMap;\nimport java.util.Map;\n\n/**\n * @author: lichengcan\n * @date: 2023-12-28 10:38\n * @description GetForObject\n **/\n\n@RestController\n@RequestMapping("/getForObject")\npublic class GetForObjectController {\n\n    @Autowired\n    RestTemplate restTemplate;\n\n    /**\n     * 1 传入一个值，返回一个对象的情况：\n     * (列举了常用的，没有面面俱到，可以照猫画虎）\n     * 1.1 直接将变量写在 url 中，记得添加注解 @PathVariable\n     * 参数拼接在url上\n     *\n     * @param id\n     * @return\n     */\n    @GetMapping("/findUserById/{id}")\n    public User findUserById(@PathVariable Integer id) {\n        String url = "http://localhost:8080/user/";\n        return restTemplate.getForObject(url + id, User.class);\n    }\n\n    /**\n     * 1.2 将变量通过key=word形式传递，\n     * 通过 HttpServletRequest 获取参数\n     * 地址栏 key=value 形式传参\n     *\n     * @param request\n     * @return\n     */\n    @GetMapping("/findAUser")\n    public User findAUser(HttpServletRequest request) {\n        String id = request.getParameter("id");\n        String url = "http://localhost:8080/userKeyValue?id=";\n        return restTemplate.getForObject(url + id, User.class);\n    }\n\n\n    /**\n     * 1.3 通过占位符：\n     * 参数的不同传法 数字占位符\n     *\n     * @param id\n     * @return\n     */\n    @GetMapping("/findOneUser/{id}")\n    public User findOneUser(@PathVariable Integer id) {\n        String url = "http://localhost:8080/user/{0}";\n        return restTemplate.getForObject(url, User.class, id);\n    }\n\n\n    /**\n     * 1.4 通过占位符，结合 Map：\n     * 参数的不同传法，Map类型\n     * 花括号里面的名字值和 map 的键名字保持一致即可，就可以传递对应的值。\n     * @param id\n     * @return\n     */\n    @GetMapping("/one/{id}")\n    public User findOneUser(@PathVariable Long id) {\n        Map<String, Long> map = new HashMap<String, Long>(2);\n        map.put("id", id);\n        return restTemplate.getForObject("http://localhost:8080/user/{id}", User.class, map);\n    }\n\n\n    /**\n     * 1.5 通过 URI 进行 访问：\n     * 使用 Spring 的 UriComponents 工具，参数可以整合到路径中。\n     * @param request\n     * @return\n     */\n    @GetMapping("/req")\n    public User findAUser1(HttpServletRequest request) {\n        Integer id = request.getParameter("id") == null ? 1 : Integer.valueOf(request.getParameter("id"));\n        UriComponents uriComponents = UriComponentsBuilder.fromUriString("http://localhost:8080/userKeyValue?id=" + id).\n                build().encode();\n        URI uri = uriComponents.toUri();\n        return restTemplate.getForObject(uri, User.class);\n    }\n\n    /**\n     * 1.6 通过 append 拼接\n     * @param id\n     * @return\n     */\n    @GetMapping("/req1")\n    public User findAUser2(Integer id) {\n        UriComponents uriComponents = UriComponentsBuilder.fromUriString("http://localhost:8080/userKeyValue?id={id}").\n                build().expand(id).encode();\n        URI uri = uriComponents.toUri();\n        return restTemplate.getForObject(uri, User.class);\n    }\n\n\n}\n')])])]),t("h2",{attrs:{id:"测试demo-被调用方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试demo-被调用方"}},[e._v("#")]),e._v(" 测试demo-被调用方")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('/*\n * Copyright 2013-2018 the original author or authors.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      https://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\npackage com.cc.userdemo.controller;\n\nimport com.cc.userdemo.domain.User;\nimport com.cc.userdemo.domain.Users;\nimport org.springframework.web.bind.annotation.*;\n\nimport javax.servlet.http.HttpServletRequest;\nimport java.io.UnsupportedEncodingException;\nimport java.util.Map;\n\n/**\n * @author lichengcan\n */\n@RestController\n@RequestMapping()\npublic class UserController {\n\n\n    @GetMapping("/user/{id}")\n    public User user(@PathVariable Long id) {\n        User user = new User();\n        user.setId(id);\n        user.setName("cc");\n        user.setAge(18);\n        return user;\n    }\n\n    @GetMapping("/userKeyValue")\n    public User userKeyValue(@RequestParam(required = false) Long id,\n                             @RequestParam(required = false) String name) {\n        User user = new User();\n        user.setId(id == null ? 1 : id);\n        user.setName(name == null ? "cc" : name);\n        user.setAge(18);\n        return user;\n    }\n\n    @PostMapping("/userDomain")\n    public User userDomain(@RequestBody(required = false) User user, HttpServletRequest request) {\n        user.setAge(188);\n        //å°ç¿乱码了\n        try {\n            System.out.println(new String(request.getHeader("cc").getBytes("ISO-8859-1"), "UTF-8"));\n        } catch (UnsupportedEncodingException e) {\n            throw new RuntimeException(e);\n        }\n        return user;\n    }\n\n    @PostMapping("/usersDomain")\n    public Users usersDomain(@RequestBody(required = false) Users user, HttpServletRequest request) {\n        try {\n            System.out.println(new String(request.getHeader("cc").getBytes("ISO-8859-1"), "UTF-8"));\n        } catch (UnsupportedEncodingException e) {\n            throw new RuntimeException(e);\n        }\n        return user;\n    }\n\n    @PostMapping("/userMap")\n    public Map userMap(@RequestBody(required = false) Map user, HttpServletRequest request) {\n        try {\n            System.out.println(new String(request.getHeader("cc").getBytes("ISO-8859-1"), "UTF-8"));\n        } catch (UnsupportedEncodingException e) {\n            throw new RuntimeException(e);\n        }\n        return user;\n    }\n\n}\n')])])]),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" User")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Data\npublic class User {\n    private Long id;\n    private String name;\n    private Integer age;\n}\n")])])]),t("h3",{attrs:{id:"users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[e._v("#")]),e._v(" Users")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@Data\npublic class Users {\n    private Long id;\n    private String name;\n    private Integer age;\n    private Map map;\n}\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);