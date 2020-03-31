### HTML



1. 概念：是最基础的网页开发语言
	* Hyper Text Markup Language 超文本标记语言
		* 超文本:
			* 超文本是用超链接的方法，将各种不同空间的文字信息组织在一起的网状文本.
		* 标记语言:
			* 由标签构成的语言。<标签名称> 如 html，xml
			* 标记语言不是编程语言

2. 快速入门：
	* 语法：
		1. html文档后缀名 .html 或者 .htm
		2. 标签分为
			1. 围堵标签：有开始标签和结束标签。如 <html> </html>
			2. 自闭和标签：开始标签和结束标签在一起。如 <br/>

		3. 标签可以嵌套：
			需要正确嵌套，不能你中有我，我中有你
			错误：<a><b></a></b>
			正确：<a><b></b></a>

		4. 在开始标签中可以定义属性。属性是由键值对构成，值需要用引号(单双都可)引起来
		5. html的标签不区分大小写，但是建议使用小写。

	* 代码：
		<html>
		
			<head>
				<title>title</title>
			</head>
			
			<body>
				<FONT color='red'>Hello World</font><br/>
				
				<font color='green'>Hello World</font>
			
			</body>
	
		</html>

3. 标签学习：
	1. 文件标签：构成html最基本的标签
		* html:html文档的根标签
		* head：头标签。用于指定html文档的一些属性。引入外部的资源
		* title：标题标签。
		* body：体标签
		* <!DOCTYPE html>：html5中定义该文档是html文档
	2. 文本标签：和文本有关的标签
		* 注释：<!-- 注释内容 -->
		
		* ```html
		  <h1> to <h6>：标题标签
		  * h1~h6:字体大小逐渐递减
		  ```
		
		  
		
		* <p>：段落标签
		
		* <br>：换行标签
		
		* <hr>：展示一条水平线
			* 属性：
				* color：颜色
				* width：宽度
				* size：高度
				* align：对其方式
					* center：居中
					* left：左对齐
					* right：右对齐
	
		* <b>：字体加粗
		
		* <i>：字体斜体
		
		* <font>:字体标签
		
		* <center>:文本居中
			* 属性：
				* color：颜色
				* size：大小
				* face：字体
		
		* 属性定义：
			* color：
				1. 英文单词：red,green,blue
				2. rgb(值1，值2，值3)：值的范围：0~255  如  rgb(0,0,255)
				3. #值1值2值3：值的范围：00~FF之间。如： #FF00FF
			* width：
				1. 数值：width='20' ,数值的单位，默认是 px(像素)
				2. 数值%：占比相对于父元素的比例

# 今日内容：

	1. HTML标签：表单标签
	
	2. CSS：


​	




## CSS：页面美化和布局控制

	1. 概念： Cascading Style Sheets 层叠样式表
		* 层叠：多个样式可以作用在同一个html的元素上，同时生效
	
	2. 好处：
		1. 功能强大
		2. 将内容展示和样式控制分离
			* 降低耦合度。解耦
			* 让分工协作更容易
			* 提高开发效率


	3. CSS的使用：CSS与html结合方式
		1. 内联样式
			 * 在标签内使用style属性指定css代码
			 * 如：<div style="color:red;">hello css</div>
		2. 内部样式
			* 在head标签内，定义style标签，style标签的标签体内容就是css代码
			* 如：
				<style>
			        div{
			            color:blue;
			        }
			
			    </style>
				<div>hello css</div>
		3. 外部样式
			1. 定义css资源文件。
			2. 在head标签内，定义link标签，引入外部的资源文件
			* 如：
	    		* a.css文件：
					div{
					    color:green;
					}
				<link rel="stylesheet" href="css/a.css">
				<div>hello css</div>
				<div>hello css</div>
	
		* 注意：
			* 1,2,3种方式 css作用范围越来越大
			* 1方式不常用，后期常用2,3
			* 3种格式可以写为：
				<style>
			        @import "css/a.css";
			    </style>
	
	4. css语法：
		* 格式：
			选择器 {
				属性名1:属性值1;
				属性名2:属性值2;
				...
			}
		* 选择器:筛选具有相似特征的元素
		* 注意：
			* 每一对属性需要使用；隔开，最后一对属性可以不加；


	5. 选择器：筛选具有相似特征的元素
		* 分类：
			1. 基础选择器
				1. id选择器：选择具体的id属性值的元素.建议在一个html页面中id值唯一
			        * 语法：#id属性值{}
			    2. 元素选择器：选择具有相同标签名称的元素
			        * 语法： 标签名称{}
			        * 注意：id选择器优先级高于元素选择器
			    3. 类选择器：选择具有相同的class属性值的元素。
			        * 语法：.class属性值{}
			        * 注意：类选择器选择器优先级高于元素选择器
			2. 扩展选择器：
				1. 选择所有元素：
					* 语法： *{}
				2. 并集选择器：
					* 选择器1,选择器2{}
				
				3. 子选择器：筛选选择器1元素下的选择器2元素
					* 语法：  选择器1 选择器2{}
				4. 父选择器：筛选选择器2的父元素选择器1
					* 语法：  选择器1 > 选择器2{}
	
				5. 属性选择器：选择元素名称，属性名=属性值的元素
					* 语法：  元素名称[属性名="属性值"]{}
	
				6. 伪类选择器：选择一些元素具有的状态
					* 语法： 元素:状态{}
					* 如： <a>
						* 状态：
							* link：初始化的状态
							* visited：被访问过的状态
							* active：正在访问状态
							* hover：鼠标悬浮状态
	6. 属性
		1. 字体、文本
			* font-size：字体大小
			* color：文本颜色
			* text-align：对其方式
			* line-height：行高 
		2. 背景
			* background：
		3. 边框
			* border：设置边框，符合属性
		4. 尺寸
			* width：宽度
			* height：高度
		5. 盒子模型：控制布局
			* margin：外边距
			* padding：内边距
				* 默认情况下内边距会影响整个盒子的大小
				* box-sizing: border-box;  设置盒子的属性，让width和height就是最终盒子的大小
	
			* float：浮动
				* left
				* right

## HTML与CSS制作登录页面：

```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <title>注册页面</title>
	<style>
	    *{
	        margin: 0px;
	        padding: 0px;
	        box-sizing: border-box;
	    }
	    body{
	        background: url("img/register_bg.png") no-repeat center;
	        padding-top: 25px;
	    }
	
	    .rg_layout{
	        width: 900px;
	        height: 500px;
	        border: 8px solid #EEEEEE;
	        background-color: white;
	        /*让div水平居中*/
	        margin: auto;
	    }
	
	    .rg_left{
	        /*border: 1px solid red;*/
	        float: left;
	        margin: 15px;
	    }
	    .rg_left > p:first-child{
	        color:#FFD026;
	        font-size: 20px;
	    }
	
	    .rg_left > p:last-child{
	        color:#A6A6A6;
	        font-size: 20px;
	
	    }
	    	    .rg_center{
	        float: left;
	       /* border: 1px solid red;*/
	
	    }
	
	    .rg_right{
	        /*border: 1px solid red;*/
	        float: right;
	        margin: 15px;
	    }
	
	    .rg_right > p:first-child{
	        font-size: 15px;
	
	    }
	    .rg_right p a {
	        color:pink;
	    }
	
	    .td_left{
	        width: 100px;
	        text-align: right;
	        height: 45px;
	    }
	    .td_right{
	        padding-left: 50px ;
	    }
	
	    #username,#password,#email,#name,#tel,#birthday,#checkcode{
	        width: 251px;
	        height: 32px;
	        border: 1px solid #A6A6A6 ;
	        /*设置边框圆角*/
	        border-radius: 5px;
	        padding-left: 10px;
	    }
	    #checkcode{
	        width: 110px;
	    }
	
	    #img_check{
	        height: 32px;
	        vertical-align: middle;
	    }
	
	    #btn_sub{
	        width: 150px;
	        height: 40px;
	        background-color: #FFD026;
	        border: 1px solid #FFD026 ;
	    }
	
	</style>
	
	</head>
	<body>
	
	<div class="rg_layout">
	    <div class="rg_left">
	        <p>新用户注册</p>
	        <p>USER REGISTER</p>
	
	    </div>
	
	    <div class="rg_center">
	        <div class="rg_form">
	            <!--定义表单 form-->
	            <form action="#" method="post">
	                <table>
	                    <tr>
	                        <td class="td_left"><label for="username">用户名</label></td>
	                        <td class="td_right"><input type="text" name="username" id="username" placeholder="请输入用户名"></td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label for="password">密码</label></td>
	                        <td class="td_right"><input type="password" name="password" id="password" placeholder="请输入密码"></td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label for="email">Email</label></td>
	                        <td class="td_right"><input type="email" name="email" id="email" placeholder="请输入邮箱"></td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label for="name">姓名</label></td>
	                        <td class="td_right"><input type="text" name="name" id="name" placeholder="请输入姓名"></td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label for="tel">手机号</label></td>
	                        <td class="td_right"><input type="text" name="tel" id="tel" placeholder="请输入手机号"></td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label>性别</label></td>
	                        <td class="td_right">
	                            <input type="radio" name="gender" value="male"> 男
	                            <input type="radio" name="gender" value="female"> 女
	                        </td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label for="birthday">出生日期</label></td>
	                        <td class="td_right"><input type="date" name="birthday" id="birthday" placeholder="请输入出生日期"></td>
	                    </tr>
	
	                    <tr>
	                        <td class="td_left"><label for="checkcode" >验证码</label></td>
	                        <td class="td_right"><input type="text" name="checkcode" id="checkcode" placeholder="请输入验证码">
	                            <img id="img_check" src="img/verify_code.jpg">
	                        </td>
	                    </tr>
	                    <tr>
	                        <td colspan="2" align="center"><input type="submit" id="btn_sub" value="注册"></td>
	                    </tr>
	                </table>
	
	            </form>
	        </div>
	
	    </div>
	
	    <div class="rg_right">
	        <p>已有账号?<a href="#">立即登录</a></p>
	    </div> 
	</div>
	</body>
	</html>
```

#### 效果如下

​		![1585639348576](C:\Users\MI\AppData\Roaming\Typora\typora-user-images\1585639348576.png)




​		




​		




​		




​		

