#### 动态路由 ####
	
- 只能在page中创建


- 命名前加'_'

[example image](https://github.com/wlg519803194/yuzhuaCollection/blob/master/1.png)

- 能匹配当前目录层级中所有不能匹配到的路由!



## slot的用法 ##


	- 在父组件的元素中定义slot属性，在子组件中必须有匹配父组件slot属性的值的slot标签，只有定义了才会显示父组件和子组件中的内容，
	
	`
		let child = {
			template: `
				<div class="child">
					 <p>子组件</p>
					 <slot name="my-body">主体默认值</slot>
				 </div>
			`
		}
		

		let parent = {
			template: `
			<div class="parent">
				 <p>父组件</p>
				 <child>
				  <p slot="my-body">我是主体</p>
				  <p>我是其他内容</p>
				  <p slot="my-footer">我是尾部</p>
				 </child>
			 </div>
			`
		}
	`

	`
	显示为：
		父组件
		我是主体
		子组件
	`




#### 作用于插槽 ####

- 作用域插槽是一种特殊类型的插槽，用作使用一个 (能够传递数据到) 可重用模板替换已渲染元素。
- 在子组件中，只需将数据传递到插槽，就像将 props 传递给组件一样
- 在父级中，具有特殊属性 scope 的 <template> 元素必须存在，表示它是作用域插槽的模板。scope 的值对应一个临时变量名，此变量接收从子组件中传递的 props 对象.


	    let child = {
			template: `
				<div class="child">
					 <p>子组件</p>
					  <slot x="child1"></slot>
				 </div>
			`
		}
		let parent = {
			template: `
				<div class="parent">
					 <p>父组件</p>
					 <child>
					  <template scope="props">
						  <p>hello from parent</p>
						  <p>{{ props.x }}</p>
					  </template>
					 </child>
				 </div>
			`	
		}

		显示为：
		
		父组件
		hello from parent
		子组件
		child1



#### 列表组件 ####

- 作用域插槽更具代表性的用例是列表组件，允许组件自定义应该如何渲染列表每一项


		let child = {
			template: `
				<ul>
					<slot name="item" v-for="item in items" :text="item.text">默认值</slot>
				</ul>
			`,
			data() {
				return: {
					items: [
						{id: 1, text: '第1段'},
						{id: 2, text: '第2段'},
						{id: 3, text: '第3段'}
					]
				}
			}
		}

		let parent = {
			temptlate: `
			<div class="parent">
				 <p>父组件</p>
				 <child>
					<template slot="item" scope="props">
					  <li>{{ props.text }}</li>
				  	</template>
				 </child>
			 </div>
			`
		}


		显示为：

		<ul>
			<li>第1段</li>
			<li>第2段</li>
			<li>第3段</li>
		</ul>





#### 关于keywords,title,descritpion ####

- 如果修改后没有改变，则修改一些数据就能改变