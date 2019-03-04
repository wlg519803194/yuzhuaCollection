
**script标签async和defer的作用**



> 一般来说为了防止页面白屏，script标签会放到body标签的最后面也就是</body>之前。如果把script标签放在head标签里而且没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该script标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行，这样就会阻塞后续的文档解析。


>efer和async可以用来控制外部脚本的执行。首先可以看看解释。
defer：用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
async：HTML5新增属性，用于异步下载脚本文件，下载完毕立即解释执行代码。
那defer与async有什么本质区别呢？
defer加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成，所以如果是脚本并没有外部引用不要使用defer。
async加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步），其他线程将下载脚本，文档的解析不会停止，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完毕。

>所以async和defer的最主要的区别就是async是异步下载，下载完后立即执行，不影响文档的解析，defer是异步加载后解析文档。

>如果有多个defer脚本，会按照顺序下载解析。而多个async脚本下载与解析的顺序是不一定的，所以如果脚本之间有依赖关系不要用async。



**a标签的使用**

>链接使用a标签有利于蜘蛛爬虫爬取，不光光只是跳转用

**尽可能多的使用html中有语义化的标签**

**增加反向链接也能有利于seo**

>反链与网站权重的关系
反链对于任何一个网站来说是必要的优化渠道，反链也是大量蜘蛛的来源，很多的说法是文本链接无法帮助排名，所以导致SEO员就非常追求锚文本的建设，酷猫也做过一个完全没有锚文本反链的站，排名也是能有3个首页，指数平均为80的词。对于反链建设，关键词相关性就能带来词的排名。
SEO优化权重与投票机制的规则：百度释放的蜘蛛，在通过各种渠道经过网站就会根据相关性留下不同的权重值，如果成立的话，蜘蛛从每个所发的相关性反链页面寻找入口，锚文本入口是匹配词相关性能留下权重为3分配关键词，超链接入口是匹配全站能留下权重为3分配全站，文本入口匹配全站能留下权重为2分配全站。（←如果，权重数值只是个构思，不是真实参数。）
文本链接反链的建立也是可以带来投票机制权重分配。对比锚文本与超链接可能文本链接反链建立会容易的多，而眼下追求反链数量的也有不少的网站，但是为什么数量这么多却没有带来排名呢，原因可能出在反链平台上。

>1、高质量的网页，所作的反向链接，对提升网站搜索引擎权重有更好的效果。这就类似于，领导来视察工作，同事说你工作好，领导可能认为你工作好；如果主管说你工作好，领导肯定就认为你工作好了。

>2、不要给被K的网站做反向链接，这样，搜索引擎会降低反向链接所在页面的权重。这就类似于，一个行为习惯不好的人，你却非常认可他的行为习惯，这样，别人就会觉得你和行为不好的人习惯一样。




**https://www.jb51.net/article/142589.htm  nuxt.js的缓存**

>nuxt 是基于 vue 的 ssr 解决方案，可以是使用vue语法完成前后端的同构。

>然而在与传统纯字符串拼接的 ssr 方案相比，性能就没那么好了， nuxt 需要在服务端生成虚拟 dom ，然后再序列化出HTML字符串，我们常说 nodejs 的高性能指的是异步IO操作频繁的场景而非CPU操作密集的场景，毕竟 nodejs 是运行在单线程下的，在涉及到高并发的场景下，性能就会有所下降，可以考虑采用合理的缓存策略

#### nuxt 的缓存可以分为 组件级别缓存 , API级别缓存 以及 页面级别缓存 ####

**组件级别的缓存**
**配置项 nuxt.config.js 的配置大概长这样子:**
>const LRU = require('lru-cache')

>module.exports = {

> render: {

>  bundleRenderer: {

>   cache: LRU({

>    max: 1000,           // 最大的缓存个数

>    maxAge: 1000 * 60 * 15    // 缓存15分钟

>   })

>  }

> }

>}

>并不是说配了该项就实现了组件级别的缓存，还需要在需做缓存的 vue 组件上增加 name 以及 serverCacheKey 字段，以确定缓存的唯一键值，比如：


>export default {

> name: 'AppHeader',

> props: ['type'],

> serverCacheKey: props => props.type

>}


>上述组件会根据父组件传下来的 type 值去做缓存，键值是： >AppHeader::${props.type} ，由此，新的请求到来时，只要父组件传下来的 type 属性之前处理过，就可以复用之前的渲染缓存结果，以增进性能

>从该例子可以看出，如果该组件除了依赖父组件的 type 属性，还依赖于别的属性， serverCacheKey 这里也要做出相应的改变，因此，如果组件依赖于很多的全局状态，或者，依赖的状态取值非常多，意味需要缓存会被频繁被设置而导致溢出，其实就没有多大意义了，在 lru-cache 的配置中，设置的最大缓存个数是1000，超出部分就会被清掉

>其次，不应该缓存可能对渲染上下文产生副作用的子组件，比如，组件的 created 与 beforeCreated 的钩子在服务端也会走，组件被缓存后就不会执行了，这些可能影响到渲染上下文的地方也要小心，更多内容请参考：组件级别缓存

>一般来说，比较适合的场景是 v-for 大量数据的渲染，因为循环操作比较耗cpu

**API级别的缓存**

>在服务端渲染的场景中，往往会将请求放在服务端去做，渲染完页面再返回给浏览器，而有些接口是可以去做缓存的，比如，不依赖登录态且不依赖过多参数的接口或者是单纯获取配置数据的接口等，接口的处理也是需要时间的，对接口的缓存可以加快每个请求的处理速度，更快地释放掉请求，从而增进性能

>api的请求使用 axios ， axios 即可以在服务端使用也可是在浏览器使用，代码大概长这样子

>import axios from 'axios'

>import md5 from 'md5'

>import LRU from 'lru-cache'
 
>// 给api加3秒缓存

>const CACHED = LRU({

> max: 1000,

> maxAge: 1000 * 3

>})
 
>function request (config) {

> let key

> // 服务端才加缓存，浏览器端就不管了
> if (config.cache && !process.browser) {
>  const { params = {}, data = {} } = config
>  key = md5(config.url + JSON.stringify(params) + JSON.stringify(data))
>  if (CACHED.has(key)) {
>   // 缓存命中
>   return Promise.resolve(CACHED.get(key))
>  }
> }
> return axios(config)
>  .then(rsp => {
>   if (config.cache && !process.browser) {
    // 返回结果前先设置缓存
    CACHED.set(key, rsp.data)
   }
   return rsp.data
  })
}

>使用上跟平时使用 axios 还是一样的，就多加了个 cache 的属性标识是否需要在服务端做缓存

>const api = {
 getGames: params => request({
  url: '/gameInfo/gatGames',
  params,
  cache: true
 })
}


**页面级别的缓存**

>在不依赖于登录态以及过多参数的情况下，如果并发量很大，可以考虑使用页面级别的缓存， 在 nuxt.config.js 增加 serverMiddleware 属性

>const nuxtPageCache = require('nuxt-page-cache')
 
>module.exports = {
 serverMiddleware: [
  nuxtPageCache.cacheSeconds(1, req => {
   if (req.query && req.query.pageType) {
    return req.query.pageType
   }
   return false
  })
 ]
}

>上面的例子根据链接后面的参数 pageType 去做缓存，如果链接后面有 pageType 参数，就做缓存，缓存时间为1秒，也就是说在1秒内相同的 pageType 请求，服务端只会执行一次完整的渲染

>nuxt-page-cache 参考了route-cache ，写得比较简陋，你也可以重新封装下，nuxt最终返回数据是使用 res.end(html, 'utf-8') ，页面级别的缓存大概的思想如下：



>const LRU = require('lru-cache')
 
>let cacheStore = new LRU({
 max: 100,     // 设置最大的缓存个数
 maxAge: 200
})
 
>module.exports.cacheSeconds = function (secondsTTL, cacheKey) {
 // 设置缓存的时间
 const ttl = secondsTTL * 1000
 return function (req, res, next) {
  // 获取缓存的key值
  let key = req.originalUrl
  if (typeof cacheKey === 'function') {
   key = cacheKey(req, res)
   if (!key) { return next() }
  } else if (typeof cacheKey === 'string') {
   key = cacheKey
  }
 
>  // 如果缓存命中，直接返回
  const value = cacheStore.get(key)
  if (value) {
   return res.end(value, 'utf-8')
  }
 
>  // 缓存原先的end方案
  res.original_end = res.end
 
>  // 重写res.end方案，由此nuxt调用res.end实际上是调用该方法，
  res.end = function () {
   if (res.statusCode === 200) {
    // 设置缓存
    cacheStore.set(key, data, ttl)
   }
   // 最终返回结果
   res.original_end(data, 'utf-8')
  }
 }
}

>如果缓存命中，直接将原先的计算结果返回，大大提供了性能



**对于标签的使用**
>提示和注释
>注释：根据 HTML5 规范，在没有其他合适标签更合适时，才应该把b <b> 标签作为最后的选项。HTML5 规范声明：应该使用 <h1> - <h6> 来表示标题，使用 <em> 标签来表示强调的文本，应该使用 <strong> 标签来表示重要文本，应该使用 <mark> 标签来表示标注的/突出显示的文本。

>提示：您也能够使用 CSS "font-weight" 属性来设置粗体文本。



**在高并发的情况下可以考虑使用缓存，而缓存策略的使用需要视场景而定，这里不再赘述，还可以考虑使用pm2开启集群模式去管理我们的进程，从而满足更高的并发。**



**[https://github.com/GoogleChrome/lighthouse](https://github.com/GoogleChrome/lighthouse "https://github.com/GoogleChrome/lighthouse") 这是一个测试浏览器性能的插件**