<p align="center">
	<a href="https://naccl.top/" target="_blank">
		<img src="./pic/NBlog.png" alt="NBlog logo" style="width: 200px; height: 200px">
	</a>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JDK-1.8+-orange">
	<img src="https://img.shields.io/badge/SpringBoot-2.2.7.RELEASE-brightgreen">
	<img src="https://img.shields.io/badge/MyBatis-3.5.5-red">
	<img src="https://img.shields.io/badge/Vue-2.6.11-brightgreen">
	<img src="https://img.shields.io/badge/license-MIT-blue">
	<img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FNaccl%2FNBlog&count_bg=%2344CC11&title_bg=%23555555&icon=notist.svg&icon_color=%231296DB&title=hits&edge_flat=false">
</p>




## Introduction

Spring Boot + Vue "Front and back separation, people stay together" blog system

Personal blog, long-term maintenance, corrections welcome

Preview address:

Front-end: [https://naccl.top](https://naccl.top)

Admin: [https://admin.naccl.top](https://admin.naccl.top)



## Backend

1. Core framework: [Spring Boot](https://github.com/spring-projects/spring-boot)
2. Security framework: [Spring Security](https://github.com/spring-projects/spring-security)
3. Token: [jjwt](https://github.com/jwtk/jjwt)
4. ORM framework: [MyBatis](https://github.com/mybatis/spring-boot-starter)
5. Pagination plugin: [PageHelper](https://github.com/pagehelper/Mybatis-PageHelper)
6. NoSQL cache: [Redis](https://github.com/redis/redis)
7. Markdown to HTML: [commonmark-java](https://github.com/commonmark/commonmark-java)
8. Offline IP address database: [ip2region](https://github.com/lionsoul2014/ip2region)
9. Scheduled tasks: [quartz](https://github.com/quartz-scheduler/quartz)
10. UserAgent parsing: [yauaa](https://github.com/nielsbasjes/yauaa)



Email template reference from [Typecho-CommentToMail-Template](https://github.com/MisakaTAT/Typecho-CommentToMail-Template)



## Frontend

Core framework: Vue2.x, Vue Router, Vuex

Vue project built with @vue/cli4.x

JS dependencies and referenced CSS: [axios](https://github.com/axios/axios), [moment](https://github.com/moment/moment), [nprogress](https://github.com/rstacruz/nprogress), [v-viewer](https://github.com/fengyuanchen/viewerjs), [prismjs](https://github.com/PrismJS/prism), [APlayer](https://github.com/DIYgod/APlayer), [MetingJS](https://github.com/metowolf/MetingJS), [lodash](https://github.com/lodash/lodash), [mavonEditor](https://github.com/hinesboy/mavonEditor), [echarts](https://github.com/apache/echarts), [tocbot](https://github.com/tscanlin/tocbot), [iCSS](https://github.com/chokcoco/iCSS)

**For the Vue3 version maintained by [@willWang8023](https://github.com/willWang8023), please check [blog-view-vue3](https://github.com/willWang8023/blog-view-vue3)**



### Admin UI

The admin panel is developed based on [my-vue-admin-template](https://github.com/Naccl/my-vue-admin-template), which is a modified version of [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) ([refactored on November 1, 2021](https://github.com/Naccl/NBlog/commit/b33641fe34b2bed34e8237bacf67146cd64be4cf))

UI framework is [Element UI](https://github.com/ElemeFE/element)



### Frontend UI

[Semantic UI](https://semantic-ui.com/): Main usage for page layout and styling. I personally think it's a nice-looking UI framework suitable for frontend interface development. It has semantic CSS and I've used it in previous blog systems. Unfortunately, the Vue version of this framework is not highly developed, see [Semantic UI Vue](https://semantic-ui-vue.github.io/#/)

[Element UI](https://github.com/ElemeFE/element): Partially used for some small components to complement Semantic UI's shortcomings and quickly implement effects

Article layout: Modified based on [typo.css](https://github.com/sofish/typo.css)



## Telegram Bot Quick Operations

| Desktop                                                   | Phone                                                     | Phone                                                     |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| ![Desktop client preview](./pic/TelegramBot.png "Desktop client preview") | ![Mobile client preview 1](./pic/TgBotPhone1.png "Mobile client preview 1") | ![Mobile client preview 2](./pic/TgBotPhone2.png "Mobile client preview 2") |

To enable this feature, follow these steps:

1. Apply for a Bot from @BotFather to get the Bot's `token`, formatted like `1234567890:qwertyuiopasdfghjklzxcvbnm`
2. Chat privately with the Bot, send any message, then open this link `https://api.telegram.org/bot<botToken>/getUpdates` (replace the token in the link), find `chatId` in `result -> message -> chat -> id`
3. Fill the obtained `token` and `chatId` into `application-dev.properties`, and enable `comment.notify.channel=tg`
4. Since only webhook is currently provided for getting message updates, `blog.api` in `application-dev.properties` needs to be filled with the backend API address, and **must be `https` (Telegram's requirement)**, which means if you don't have a public IP, intranet penetration, or reverse proxy, you cannot test in a local environment. It's recommended to deploy it directly on a server
5. In mainland China, access to Telegram API is usually blocked, so two options are provided:
   1. Forward proxy: Configure `http.proxy.server` to send requests through your proxy
   2. Reverse proxy: You can directly use my reverse proxy running on Cloudflare Workers with default configuration. Example code is in `blog-api/cfworker-tg-api-open.js` for self-deployment (**Update 05.12.22: In the past two days, `*.workers.dev` domains have been blocked in most areas of mainland China. If you still want to access CF Worker using this reverse proxy method, you need to bind the Worker route to your own domain. See [related discussion](https://github.com/XIU2/CloudflareSpeedTest/issues/205)**)



## Development Environment

1. Create MySQL database `nblog`, and execute `/blog-api/nblog.sql` to initialize table data
2. Modify configuration information in `/blog-api/src/main/resources/application-dev.properties`
3. Install and start Redis
4. Start the backend service
5. Run `npm install` in both `blog-cms` and `blog-view` directories to install dependencies
6. Run `npm run serve` in both `blog-cms` and `blog-view` directories to start frontend and admin pages



## Notes

Some common issues:

- Ensure MySQL database character set is `utf8mb4` ("Site Settings" and "Article Details" and many other table fields require `utf8mb4` character set to support emoji, otherwise even if the SQL file is successfully imported, some field contents will be incomplete, causing the frontend page to report errors when rendering data)
- Ensure Maven and NPM can successfully import current version dependencies, do not upgrade or downgrade dependency versions
- The default username and password in the database are `Admin` and `123456`. Since this is a personal blog, there's no plan to make a password modification page. You can manually generate a password using the `main` method in `top.naccl.util.HashUtils` and store it in the database
- Remember to modify the configuration information in `application-dev.properties`
  - Make sure to change `token.secretKey`, otherwise token security cannot be guaranteed
  - The default configuration of `spring.mail.host` and `spring.mail.port` is for Alibaba Cloud Email, refer to the keyword `spring mail server` for other email service providers (email configuration is used for receiving/sending comment notifications)
- For deployment, remember to modify `baseUrl` in `/blog-view/src/plugins/axios.js` and `/blog-cms/src/util/request.js` to your backend API address
- Most personalized configurations can be modified in the "Site Settings" in the admin panel, but some parts (like the homepage banner image) need to modify the frontend source code for first screen loading speed considerations



## Hidden Features

- After logging in by visiting the `/login` path in the frontend, you can reply to comments as the blog owner (with blog owner identification) and submit without filling in nickname and email
- Adding `<meting-js server="netease" type="song" id="song_id" theme="#25CCF7"></meting-js>` in Markdown (note to add as regular text, not as a code snippet) can add an [APlayer](https://github.com/DIYgod/APlayer) music player to the article. `netease` refers to NetEase Cloud Music. For other configurations and specific usage, refer to [MetingJS](https://github.com/metowolf/MetingJS)
- Two hidden text effects are provided: In Markdown, using `@@` to wrap text will render it as a "black curtain" effect, where text is only displayed when hovering over it; using `%%` to wrap text will cover it with a "blue overlay", where text is only displayed when selected. For example: `@@hidden text@@`, `%%hidden text%%`



## LICENSE

[MIT](https://github.com/Naccl/NBlog/blob/master/LICENSE)



## Thanks

Thanks to [JetBrains](https://www.jetbrains.com/?from=NBlog) for providing the Open Source License

Thanks to each open source project mentioned above