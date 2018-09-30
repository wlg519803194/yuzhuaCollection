### github上传教程 ###	

https://www.cnblogs.com/cxk1995/p/5800196.html



### 收集 ###
	fadeTo======>jq中让元素淡出（毫秒，淡出的透明度）
	hide（）====> jq中让元素隐藏

### 给input框设置默认值 ###
	 <input name="" type="text" class="fl inp" value="请输入关键字信息"
                               onfocus="if(value==defaultValue){value='';this.style.color='#4c4c4c'}"
                               onblur="if(!value){value=defaultValue;this.style.color='#b2b2b2'}" style="color:#b2b2b2">

### css实现图片旋转 ###

	@-webkit-keyframes rotation{
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(360deg);}
	}
	
	.图片的类型{
	-webkit-transform: rotate(360deg);
	animation: rotation 3s linear infinite;
	-moz-animation: rotation 3s linear infinite;
	-webkit-animation: rotation 3s linear infinite;
	-o-animation: rotation 3s linear infinite;
	}

### 轮播插件网址 ###
	
	SuperSlide      是基于jq的ui特效插件
	http://down.admin5.com/demo/code_pop/18/562/

### ui插件 ###

	http://www.jq22.com/

scrollbar操控滚动条

### js原生实现选项卡效果 ###

*选项卡在js中是一个重要的存在。他没有那么难，但在工作中却有重要的位置。几乎在每一个网站都能看到选项卡的实例。所以今天写一下选项卡的实现。

我们设想有三个按钮分别来控制三个盒子当我们点击当前的按钮的时候，让对应的盒子显示，让其余的盒子隐藏。

废话不多说，直接上代码*

#### 首先来布局 ####
	
	<div id="box">
	
	　　<input type="button" value="书籍" class="on">
	
	　　<input type="button" value="图片">
	
	　　<input type="button" value="专栏">
	
	　　<div style="display:block;">书籍</div>
	
	　　<div>图片</div>
	
	　　<div>专栏</div>
	
	</div>

#### 当然有必要给他们添加样式，为实现选项卡的效果做准备 ####

	<style>

	　　#box div{width:200px;height:200px;background:#ccc;display:none;}
	
	　　.on{color:#fff;background:red;}
	
	</style>

*这样我们可以得到一个静态的选项卡。

选项卡的思路是当我们点击的当前的按钮的时候，先清空所有的样式，再给当前的按钮和盒子添加样式。
*
#### 以下为js代码 ####

	<script>

	　　//获取元素
	
	　　var oBox=document.getElementById("box");
	
	　　var aBtn=oBox.getElementsByTagName("input");
	
	　　var aDiv=oBox.getElementsByTagName("div");
	
	　　
	
	　　//aBtn是一组元素，所以需要用到for循环
	
	　　for(var i=0;i<aBtn.length;i++){
	
	　　　　aBtn[i].index=i;//这里需要了解浏览器加载代码的执行顺序，首先是加载html标签属性，然后过滤自定义的属性，最后加载js。了解了浏览器的加载过程，就可以了解我们在执行js代码的时候给每一个按钮加上自定义属性，因为这样就不会被过滤掉了。并且可以让div的下标等于btn的下标
	
	　　　　aBtn[i].onclick=function(){
	
	　　　　　　for(var i=0;i<aBtn.length;i++){//先清空所有的样式
	
	　　　　　　　　aBtn[i].className='';
	
	　　　　　　　　aDiv[i].style.display='none';
	
	　　　　　　}
	
	　　　　　　//给当前的按钮和div添加样式
	
	　　　　　　this.className='on';
	
	　　　　　　aDiv[this.index].style.display='block';　
	
	　　　　};
	
	　　}
	
	</script>


#### css实现图片慢慢从上面往下面显示出来 ####

	$("#dv1").animate({ height: "60px" });

 	<div style="height:60px;width:100px;position:relative">
        <div id="dv1" style="background: #98bf21; height: 0px; width: 100px; position: absolute;bottom:0px">
        </div>
    </div>

#### css实现图片慢慢显示 ####

	.flowChat li:hover .transparentCircle{
            /*width:100px;*/
            height:213px;
            /*background:red;*/
            position:absolute;
            animation:myfirst 1s;
            -webkit-animation:myfirst 1s;
            animation-fill-mode: forwards;
        }
	/*Safari and Chrome */
	@-webkit-keyframes myfirst{
	    0%   {height:21px;}
	    12%   {height:42px;}
	    25%  {height:63px;}
	    37%  {height:84px;}
	    50%  {height:105px;}
	    62%  {height:126px;}
	    75%  {height:147px;}
	    87%  {height:168px;}
	    100% {height:213px;}
	}

#### css实现图片慢慢显示 ####
	一开始.transparentCircle的height为0
	.flowChat li:hover .transparentCircle{
	    height:213px;
	    transition: height .15s ease;
	}

### 跳转到对应的滚动高度 ###

	1、不适用锚点跳转，因为锚点跳转会影响页面的刷新，适用scrollIntoView

  	 document.getElementById('1').onclick = function(){
            document.getElementById('12').scrollIntoView();
        };
        document.getElementById('2').onclick = function(){
            document.getElementById('13').scrollIntoView();
        };
        document.getElementById('3').onclick = function(){
            document.getElementById('14').scrollIntoView();
        };
        document.getElementById('4').onclick = function(){
            document.getElementById('15').scrollIntoView();
        };

	2、适用锚点跳转，跳转到对应的锚点位置
	
	<a href="#12"></a>
	<div id="12"></div>
	这样就能通过点击a标签跳转到对应的锚点div

#### offset（）的用法 ####

	这是jquery中的用法，
	offset(): 
	获取匹配元素在当前视口的相对偏移。 
	返回的对象包含两个整形属性：top 和 left。此方法只对可见元素有效。
	$("#sntetwt").offset()：获得位移对象（此时其实啥也没做）
	$("#sntetwt").offset().top：获得位移高度


### 怎么让ie兼容placeholder========================== ###

	IE10及以下的版本并不支持这个属性，那么怎么让其在IE10以下仍然可以实现这个效果呢，只需要在js文件里面引入一段脚本即可:
	$(function(){
	  //判断浏览器是否支持placeholder属性
	  supportPlaceholder='placeholder'in document.createElement('input'),
	  placeholder=function(input){
	    var text = input.attr('placeholder'),
	    defaultValue = input.defaultValue;
	    if(!defaultValue){
	      input.val(text).addClass("phcolor");
	    }
	    input.focus(function(){
	      if(input.val() == text){
	        $(this).val("");
	      }
	    });
	    input.blur(function(){
	      if(input.val() == ""){
	        $(this).val(text).addClass("phcolor");
	      }
	    });
	    //输入的字符不为灰色
	     input.keydown(function(){
	       $(this).removeClass("phcolor");
	     });
	   };
	   //当浏览器不支持placeholder属性时，调用placeholder函数
	   if(!supportPlaceholder){
	     $('input').each(function(){
	       text = $(this).attr("placeholder");
	       if($(this).attr("type") == "text"){
	         placeholder($(this));
	       }
	     });
	   }
	 });

#### css动效网址：http://www.jq22.com/yanshi819 ####

### 懒加载lazyload是基于jq的插件 ###

#### 下载：$ npm install jquery-lazyload  ####

	lazyload依赖与jquery。所以先引入jquery和lazyload

	<script src="jquery.js"></script>
	<script src="jquery.lazyload.js"></script>
	1.将图片路径写入data-original属性
	2.给lazyload的图片增加一个名为lazy的class
	3.选择所有要lazyload的图片（img.lazy），执行lazyload();

	<img class="lazy" data-original="img/example.jpg" style="margin-top:1000px" height="200">
	<script>
	    $(function(){
	        $("img.lazy").lazyload();
	    })
	</script>
	注意：必须设置图片的高度或者宽度，否则插件可能无法正常工作

#### 提前加载——Threshold ####
	lazyload默认是当滚动到该图片位置时，加载该图片。但是可以通过设置Threshold参数来实现滚到距离其xx px时就加载。

    $(function(){
        $("img.lazy").lazyload({
            threshold :20
        });
    })
	上面的例子设置了滚动到距离图片20px时，图片就开始再开始加载
	
	事件触发(可以是jquery事件，也可以是自定义事件)——Event
	当触发定义的事件时，图片才开始加载
	
	    $(function(){
	        $("img.lazy").lazyload({
	            event : "click"
	        });
	    })
	上面的例子使图片点击后，才开始加载
	
	Tip:你可以使用这个来实现图片的延迟加载
	
	$(function() {
	    $("img.lazy").lazyload({
	        event : "sporty"
	    });
	});
	
	$(window).bind("load", function() {
	    var timeout = setTimeout(function() {
	        $("img.lazy").trigger("sporty")
	    }, 5000);
	});
	上面的代码在页面加载完毕后五秒才开始加载图片

	设定效果——Effects
	插件默认的加载效果是 show() ,你可以使用任何你想要的效果。下面的代码使用了 fadeIn()
	
	$("img.lazy").lazyload({
	    effect : "fadeIn"
	});
	滚动容器内的图片——container
	插件也可以使用在滚动容器内的图片上。下面的div拥有scrollerbar，内容的内容进行滚动，滚到图片位置时，图片开始加载
	
	<div style="height:600px;overflow:scroll" id="container">
	    <img class="lazy" data-original="img/example.jpg"  alt="" style="margin-top:1000px" height="200">
	</div>
	<script>
	    $(function(){
	        $("img.lazy").lazyload({
	            container: $("#container")
	        });
	    })
	</script>
	不顺序排列的图片
	插件会执行一个寻找未加载图片的循坏，该循环会检查图片是否可见，默认情况下，当第一个视图外的图片被找到，循环就会停止 。
	但是存在一种情况：页面布局图片的顺序和html图片代码的顺序不一致;它会导致本该加载的没有加载。这种情况下就可以将 failurelimit 设为 10 ，它令插件找到 10 个不在可见区域的图片是才停止搜索. 如果你有一个恶心的布局, 请把这个参数设高一点。
	代码：
	
	$("img.lazy").lazyload({
	    failure_limit : 10
	});
	处理隐藏图片——skip_invisible
	为了提升性能，插件默认忽略隐藏的图片；如果想要加载隐藏图片.设置skip_invisible为false;
	注意：Webkit浏览器将自动把没有宽度和高度的图像视为不可见
	
	$("img.lazy").lazyload({
	    skip_invisible : true
	});


### 如何使用webpack ###
	*教你如何使用webpack打包你的项目========http://blog.csdn.net/u012631731/article/details/73716951
	*
	*webpack是前端开发中比较常用的打包工具之一，另外还有gulp，grunt。之前没有涉及过打包这块，这里介绍一下使用webpack打包的流程。
	
	Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。
	*
	
	*Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件。
	*
	
		下面我们新建一个项目来详细描述一下使用webpack打包项目的过程：
	
	1.安装好npm，这个不再复述，然后在一个目录下执行 npm init，这样就会初始化一个项目包，里面就有了一个package.json的文件，这个文件想必大家都有所了解
	
	2.然后安装一下webpack，既然我们想打包，就要把webpack这个工具安装好，安装方式有两种，一个是全局安装一个是安装在项目中，在项目的package.json目录下执行的命令分别是npm install -g webpack 和 npm install --save-dev webpack，在这里我们安装在项目里面，使用第二种安装方式
	
	3.安装完成之后我们能看到项目目录下有一个node_module的文件夹，然后我们就可以写自己的项目了，我们首先建立一个app和public的文件夹，在app中新建两个文件，分别是test.js和main.js，在pulic中新建一个index.html文件，这样我们的基本项目雏形就产生了
	
	
	
	4.我们在index.html中写入一下片段：
	
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <title>Webpack Project</title>
	  </head>
	  <body>
	    <div id='root'>
	    </div>
	    <script src="bundle.js"></script>
	  </body>
	</html>
	
	5.我们在test.js中写入这样一个除了方法：
	
	//test.js
	
	module.exports = function() {
	  var test= document.createElement('div');
	  test.textContent = "Hi there and testing!";
	  return test;
	};
	
	6.我们在main.js中把test.js的方法导入进来：
	
	//main.js 
	var test= require('./test.js');
	document.getElementById('root').appendChild(test());
	
	7.下面我们就可以使用webpack工具进行打包了，在项目的根目录，也就是包含node_module的目录下执行下面这个命令node_modules/.bin/webpack app/main.js public/bundle.js，这条命令的是使用webpack把打包后的文件命名为bundle.js放在public文件夹下，其中app/main,js是项目的入口。我们能看到终端上会打印出包含这样的log
	
	
	
	8.这就说明我们的打包工作完成了，然后我们打开index.html文件就能看到我们输入的内容：Hi there and testing!
	
	9.这样要配置项目入口，又要配置输出文件名之类的东西，在命令行输入比较麻烦，我们可以使用文件配置的方式，在项目的根目录中新建一个webpack.congfig.js的文件，把下面这些内容写入进去
	
	module.exports = {
	  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
	  output: {
	    path: __dirname + "/public",//打包后的文件存放的地方
	    filename: "bundle.js"//打包后输出文件的文件名
	  }
	}
	
	这样我们就可以直接使用node_modules/.bin/webpack直接进行打包操作了
	
	10.如果我们不想使用node_modules/.bin/webpack这样的命令，习惯使用npm xxx之类的，我们在我们的package.json中设置一下启动命令即可：
	
	"scripts": {
	    "webpack": "webpack" //配置的地方就是这里啦
	  }
	
	然后我们直接执行npm run webpack同样可以执行打包任务
	
	11.接下来我们介绍，如何直接引入json类型的文件，这里我们使用loaders模块，先说一下应用场景吧。我们现在有一个json文件，我们想把它导入到模块中，然后读取里面的信息，下面我们的文件目录是这样的：
	
	
	
	12.如果我们想在任意一个模块，如test.js或者main.js中导入这个json文件，比如，我们的test.json文件中有这样一个内容
	
	//test.json
	{
	  "Test": "Hi there and geetings from JSON!"
	}
	
	我们想在test.js使用这样Test字段
	
	var test = require('./test.json');
	
	module.exports = function() {
	  var geet = document.createElement('div');
	  geet.textContent = test.greetText;
	  return geet;
	};
	
	我们就要引入json-loader，具体的办法是：在根目录下执行
	
	//安装可以装换JSON的loader
	npm install --save-dev json-loader
	
	然后把我们的webpack.config.js配置成下面这样
	
	module.exports = {
	  entry:  __dirname + "/app/main.js",
	  output: {
	    path: __dirname + "/public",
	    filename: "bundle.js"
	  },
	
	
	  module: {//在配置文件里添加JSON loader
	    loaders: [
	      {
	        test: /\.json$/,
	        use: "json-loader"
	      }
	    ]
	  }
	}
	
	最后我们执行一下npm run webpack，打包完成，打开index.html页面就会显示test.json里面的Hi there and geetings from JSON!这个内容
	
	13.如果我们想把css样式也一起打包，就npm install --save-dev style-loader css-loader，然后在webpack.config.js进行相应的配置就行了，这样是把js和css打包成一个文件，也可以把他们分开打包，这样后面再介绍吧
	
	目前您尚未登录，请 登录 或 注册 后进行评论
	Webpack 入门(一)：安装 / 打包 / 命令行 Echo601Echo6012017年07月25日 10:282681
	*注：以下操作的前提是已全局安装node 和 webpack一：安装webpack和基本环境搭建新建一个工作的文件夹（我取的名字叫Webpack） 打开命令行，cd进入该文件夹//初始化一下npm>...
	webpack安装和命令行 github_26672553github_266725532017年03月01日 11:142524
	1、进入我们的项目目录webpack-test，初始化npmnpm init执行这个命令，会要求我们输入name、version、description等，也可以不填，一路回车。 最后会在目录下生成...
	 
	一小时包教会 —— webpack 入门指南 yczzyczz2015年10月19日 15:2826908
	什么是 webpack？ webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。 ...
	打包利器webpack DimikartDimikart2015年12月25日 09:25961
	Webpack 是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。市面上已经存在的模块管理和打包工具并不适合大型的项目，尤其单页面 Web 应用程序...
	webpack常用命令 yalishandaleeyalishandalee2016年09月23日 11:40469
	webpack #最基本的启动webpack命令webpack -w #提供watch方法，实时进行打包更新webpack -p #对打包后的文件进行压缩webpack -d #提供SourceMap...


#### 同时对ie和现代浏览器阻止默认事件 ####

	if(event.preventDefault) {
			event.preventDefault();
		}else {
			window.event.returnValue = false;
		}

### 各个浏览器对鼠标滚轮事件的支持不一样，最好使用如下： ###
	

	$(window).scroll(function(){})

### Array的一个构造函数：（用来获取数组中最大的一个数字） ###

	Array.max=function(array){  
        return Math.max.apply(Math,array);  
    }  

### 判断是不是ie浏览器 ###

	<script type="text/javascript">
    (function () {
        var snowMask = document.querySelector('#snowMask');

        function isIE() {
            if (!!window.ActiveXObject || "ActiveXObject" in window)
                return true;
            else
                return false;
        }

        snowMask.style.display = (!isIE()) ? "block" : "none";
    })();
	</script>

#### jq可以进行连续性的操作，如下 ####

	$(this).addClass("on").siblings().removeClass("on");



#### 伪元素+content的写法====>这个可以在这个类后面加一个145高，宽1px的线 ####

	.fm_list:after{
	content: "";
	position: absolute;
	right: 0;
	top: 5px;
	height: 145px;
	width: 1px;
	background: rgba(255,255,255,0.1);
	}

### 其他字体引入 ###
	@font-face {
	    font-family: 'moneyfont';
	    src: url('../fonts/GothaProMed.woff.eot'); /* IE9 Compat Modes */
	    src: url('../fonts/GothaProMed.woff.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../fonts/GothaProMed.woff.ttf') format('truetype'), /* Safari, Android, iOS */ url('../fonts/GothaProMed.woff.woff') format('woff'), /* Modern Browsers */ url('../fonts/GothaProMed.woff.svg') format('svg'); /* Legacy iOS */
	    font-weight: normal;
	    font-style: normal;
	}

#### 一个简单的动画 ####

	
	.hover-QR-code {
	    -webkit-transition: All .2s linear;
	    -moz-transition: All .2s linear;
	    -ms-transition: All .2s linear;
	    -o-transition: All .2s linear;
	    transition: All .2s linear;
	    width: 240px;
	    height: 426px;
	    position: absolute;
	    top: 0;
	    background: rgba(0, 72, 255, .75);
	    right: -240px;
	}
	.commodity:hover .hover-QR-code {
	    right: 0;
	}
	它的父级是overflow:hidden;


### 轮播的一个插件 ###


	<script type="text/javascript" src="js/wow.min.js"></script>

	<div class="case hide">
	    <div class="title">
	        <div class="big"><span>案例展示</span></div>
	    </div>
	    <div id="focus_Box">
	        <span class="prev">&nbsp;</span>
	        <span class="next">&nbsp;</span>
	        <ul>
	            <li><img src="images/index/temp/001.png"/></li>
	            <li><img src="images/index/temp/001.png"/></li>
	            <li><img src="images/index/temp/001.png"/></li>
	            <li><img src="images/index/temp/001.png"/></li>
	            <li><img src="images/index/temp/001.png"/></li>
	        </ul>
	    </div>
	</div>
	<!--case end-->
	<script type="text/javascript">
	    $(function () {
	        new ZoomPic("focus_Box");
	    })
	</script>
	<script type="text/javascript">
	    $(function () {
	        new WOW().init();
	    });
	</script>

这个插件的其他动画：

	<div class="louti" id="template_style">
                    <div class="style_left wow fadeInLeft" data-wow-delay="0.1s">
                        <div class="left_box">
                            <img src="images/mallDetails/phone_white_03.png" class="phone_white" alt="">
                            <img src="images/mallDetails/phone_content_03.png" class="phone_content" alt="">
                        </div>
                    </div>
                    <div class="style_right wow fadeInRight" data-wow-delay="0.2s">
                        <div class="left_box">
                            <img src="images/mallDetails/phone_white_03.png" class="phone_white" alt="">
                            <img src="images/mallDetails/phone_content_03.png" class="phone_content" alt="">
                        </div>
                    </div>


<li class="jiantou wow fadeInRight" data-wow-delay="0.8s"></li>表示延迟几秒执行这个动画



按钮水花效果

	button:after {
	    content: "";
	    display: block;
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    left: 0;
	    pointer-events: none;
	    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
	    background-repeat: no-repeat;
	    background-position: 50%;
	    transform: scale(10, 10);
	    opacity: 0;
	    transition: transform .3s, opacity .5s;
	}
	
	button:active:after {
	    transform: scale(0, 0);
	    opacity: .3;
	    transition: 0s;
	}


#### js设置的一个简单的动画 ####

		$('.problemul li').mouseover(function(){
	    if(!$(this).hasClass('curr')){
	      $('.problemul li').removeClass('curr');
	      $(this).addClass('curr');
	      $('.curr').stop().animate({width: 330}, 500, 'linear');
	      $('.problemul li').not('.curr').stop().animate({width: 218}, 500, 'linear');
	    }
	  });

#### 一个小动画 ####

	
	@-webkit-keyframes zoomIn1 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	@keyframes zoomIn1 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	.zoomIn1 {
	    -webkit-animation-name: zoomIn1;
	    animation-name: zoomIn1;
	    animation-delay: 0s;
	    -webkit-animation-delay: 0s;
	}
	
	@-webkit-keyframes zoomIn2 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	@keyframes zoomIn2 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	.zoomIn2 {
	    -webkit-animation-name: zoomIn2;
	    animation-name: zoomIn2;
	    animation-delay: 0.2s;
	    -webkit-animation-delay: 0.2s;
	}
	
	@-webkit-keyframes zoomIn3 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	@keyframes zoomIn3 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	.zoomIn3 {
	    -webkit-animation-name: zoomIn3;
	    animation-name: zoomIn3;
	    animation-delay: 0.4s;
	    -webkit-animation-delay: 0.4s;
	}
	
	@-webkit-keyframes zoomIn4 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	@keyframes zoomIn4 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	.zoomIn4 {
	    -webkit-animation-name: zoomIn4;
	    animation-name: zoomIn4;
	    animation-delay: 0.6s;
	    -webkit-animation-delay: 0.6s;
	}
	
	@-webkit-keyframes zoomIn5 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	@keyframes zoomIn5 {
	    0% {
	        opacity: 0;
	        -webkit-transform: translate(-40px, 40px);
	        transform: translate(-40px, 40px);
	    }
	
	    50% {
	        opacity: 0;
	        -webkit-transform: translate(-20px, 20px);
	        transform: translate(-20px, 20px);
	    }
	
	    100% {
	        opacity: 1;
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	}
	
	.zoomIn5 {
	    -webkit-animation-name: zoomIn5;
	    animation-name: zoomIn5;
	    animation-delay: 0.8s;
	    -webkit-animation-delay: 0.8s;
	}
	
	@keyframes move1 {
	    0% {
	        -webkit-transform: translate(0, 0);
	        transform: translate(0, 0);
	    }
	
	    100% {
	        -webkit-transform: translate(20px, -20px);
	        transform: translate(20px, -20px);
	    }
	}
	
	@keyframes move2 {
	    0% {
	        -webkit-transform: translate(20px, -20px);
	        transform: translate(20px, -20px);
	    }
	
	    100% {
	        -webkit-transform: translate(0px, 0px);
	        transform: translate(0px, 0px);
	    }
	}
	


### webpack打包工具中config说明：：：： ###


		entry:是打包的入口文件，可以拥有多个js文件；
	output：是输出文件，其中path:表示打包后存到那个文件夹里面；
	
	resolve:{
	        extensions:['.js','.css','.json']  //用于配置程序可以自行补全哪些文件后缀
	    },
	
	   plugins:[
	        new HtmlWebpackPlugin({
	            title: 'hello webpack',
	            template:'src/components/index.html',
	            inject:'body',
	            minify:{ //压缩HTML文件
	                removeComments:true,    //移除HTML中的注释
	                collapseWhitespace:true    //删除空白符与换行符
	            }
	        }),
	        new MiniCssExtractPlugin({
	            filename: "[name].[chunkhash:8].css",
	            chunkFilename: "[id].css"
	        }),
	        new CleanWebpackPlugin(['dist'])
	    ]


#### 分享和收藏可以进入其他页面的链接：http://www.jiathis.com/share ####


### 一段实现3d动画的代码（研究用） ###

    <!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8">
	<title></title>
	<style type="text/css">
		.wrap {
		    perspective: 800px;
		    perspective-origin: 50% 100px;
		}
		.cube {
		    position: relative;
		    width: 200px;
		    transform-style: preserve-3d;
		}
		.cube div {
		    position: absolute;
		    width: 200px;
		    height: 200px;
		}
		.back {
		    transform: translateZ(-100px) rotateY(180deg);
		}
		.right {
		    transform: rotateY(-270deg) translateX(100px);
		    transform-origin: top right;
		}
		.left {
		    transform: rotateY(270deg) translateX(-100px);
		    transform-origin: center left;
		}
		.top {
		    transform: rotateX(-90deg) translateY(-100px);
		    transform-origin: top center;
		}
		.bottom {
		    transform: rotateX(90deg) translateY(100px);
		    transform-origin: bottom center;
		}
		.front {
		    transform: translateZ(100px);
		}
		@keyframes spin {
		    from { transform: rotateY(0); }
		    to { transform: rotateY(360deg); }
		}
		 
		.cube {
		    animation: spin 5s infinite linear;
		}
		@keyframes spin-vertical {
		    from { transform: rotateX(0); }
		    to { transform: rotateX(-360deg); }
		}
		 
		.cube-wrap.vertical .cube {
		    margin: 0 auto; /* keeps the cube centered */
		 
		    transform-origin: 0 100px;
		    animation: spin-vertical 5s infinite linear;
		}
		 
		.cube-wrap.vertical .top {
		    transform: rotateX(-270deg) translateY(-100px);
		}
		 
		.cube-wrap.vertical .back {
		    transform: translateZ(-100px) rotateX(180deg);
		}
		 
		.cube-wrap.vertical .bottom {
		    transform: rotateX(-90deg) translateY(100px);
		}
		.wrap {
		    /* no more perspective */
		    perspective: none;
		    perspective-origin: 0 0;
		}
	</style>
	</head>
	<body>
	<div class="wrap">
	    <div class="cube">
	        <div class="front">front</div>
	        <div class="back">back</div>
	        <div class="top">top</div>
	        <div class="bottom">bottom</div>
	        <div class="left">left</div>
	        <div class="right">right</div>
	    </div>
	</div>
	</body>
	</html>



	### 慢慢的向上面滚动消失，一般用于每次交易后显示某某某购买了什么的 ###

	#### html和script片段 ####

		<div class="scrolling">
				<div class="bd">
					<ul class="rolling">
						<li>
							商标猎头帮用户628123，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户62845，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6453，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户627843，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户64543，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6288943，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户628123，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户62845，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6453，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户627843，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户64543，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6288943，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户628123，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户62845，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6453，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户627843，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户64543，找到了用户4583162
						</li>
						<li>
							商标猎头帮用户6288943，找到了用户4583162
						</li>
					</ul>
				</div>
			</div>
			<script>
				        //底部消息滚动
		        function singleDong(obj) {
		            $(obj).fadeIn(200).animate({
		                opacity: '0',
		                filter: 'alpha(opaicty=0)'
		            }, 2800, 'swing', function () {
		                $(this).css({
		                    opacity: '1',
		                    filter: 'alpha(opaicty=100)',
		                    visibility: "hidden"
		                });
		            })
		        }
                jQuery(".scrolling").slide({
                    mainCell: ".bd ul",
		            autoPlay: true,
		            effect: "topMarquee",
		            interTime: 30,
		            mouseOverStop:false,
		            easing: "easeOutCubic",
		            // vis:2,
		            startFun: function (i, c) {

		                var a = $(".scrolling").offset().top;
		                $(".rolling li").each(function () {
		                    var b = $(this).offset().top - a;
		                    if (b == 45) {
		                        $(this).css({
		                            visibility: "visible"
		                        })
		                        singleDong($(this))
		                    }
		                })

		            }
                });

		#### css代码段 (sass)####
			.scrolling{
				position:absolute;
				bottom: 10px;
				.rolling{
					width:330px;
					li{
						width:320px;
						height:26px;
						border:1px dashed #5680e0;
						border-radius: 12px;
						margin:40px auto 20px auto;
						position:relative;
						font-size:12px;
						color:#5680e0;
						line-height:26px;
						cursor:pointer;
						.close_btn{
							position:absolute;
							top:0;
							right:0;
							width:10px;
							height:10px;
							font-size:10px;
							display:inline-block;
							margin:8px 8px 0 0;
							cursor:pointer;
							background:url('../images/right/x.png') no-repeat;
						}
					}
				}
			}



#### 表单提交后怎么接收后台返回的数据 ####

	$(function(){  
	    /** 验证文件是否导入成功  */  
	    $("#form1").ajaxForm(function(data){    
	        if(data=="1"){  
	            alert("提交成功！");     
	        }  
	    });       
	}); 


#### 提交表单时的验证 ####

	 $("#form1").bind("submit", function(){  
		var file=$("#file_sc").val();
		if(file == ""){  
			alert("请选择文件！！！");
			return false;  
		}  
	});



#### 手机端滑动方向判断 ####

 	// 返回角度
      function GetSlideAngle (dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI
      }
      // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
      function GetSlideDirection (startX, startY, endX, endY) {
        var dy = startY - endY
        var dx = endX - startX
        var result = 0
        // 如果滑动距离太短
        if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
          return result
        }
        var angle = GetSlideAngle(dx, dy)
        if (angle >= -45 && angle < 45) {
          result = 4
        } else if (angle >= 45 && angle < 135) {
          result = 1
        } else if (angle >= -135 && angle < -45) {
          result = 2
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          result = 3
        }
        return result
      }
      // 滑动处理
      var startX, startY
      document.getElementById('weui-picker__group').addEventListener('touchstart', function (ev) {
        startX = ev.touches[0].pageX
        startY = ev.touches[0].pageY
      }, false)
      document.getElementById('weui-picker__group').addEventListener('touchend', function (ev) {
        var endX, endY
        endX = ev.changedTouches[0].pageX
        endY = ev.changedTouches[0].pageY
        var direction = GetSlideDirection(startX, startY, endX, endY)
        var temp = parseFloat(document.getElementsByClassName('weui-picker__content')[0].style.transform.split(',')[1])
        switch (direction) {
          case 0:
            alert('没滑动')
            break
          case 1:
            document.getElementsByClassName('weui-picker__content')[0].style.cssText = 'transform: translate3d(0px, ' + (temp - 65) + 'px, 0px)'
            break
          case 2:
            document.getElementsByClassName('weui-picker__content')[0].style.cssText = 'transform: translate3d(0px, ' + (temp + 65) + 'px, 0px)'
            break
          case 3:
            alert('向左')
            break
          case 4:
            alert('向右')
            break
          default:
        }
      }, false)
    }


#### Blob对象

----------
*Blob对象是一个不可改变、最原始数据的类文件对象*

	Blob不一定是一个js原生格式的数据
	FIle接口基于Blob，继承了Blob功能并将其扩展使其支持用户系统上的文件



#### File ####

*File对象,就是一个文件,比如我用input type="file"标签来上传文件,那么里面的每个文件都是一个File对象.*


	File.webkitRelativePath是目录选择器，是一个只读选择器

	File.webkitRelativePath的使用的时候，必须要在input标签上面加上webkitdirectory属性










## 弄的很挫，只是收集，低级，勿喷 ##