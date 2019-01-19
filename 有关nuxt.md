#### 动态路由 ####
	
- 只能在page中创建


- 命名前加'_'

[example image](https://github.com/wlg519803194/yuzhuaCollection/blob/master/1.png)

- 能匹配当前目录层级中所有不能匹配到的路由!



#### slot的用法 ####

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