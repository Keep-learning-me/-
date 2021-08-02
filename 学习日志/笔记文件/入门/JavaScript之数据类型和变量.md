#### JavaScript之初学第一天

##### 数据类型

###### `Number`
```javascript
123; //整数123
0.345; //小数0.345
1.243e4; //科学计数法表示1.243 * 10000 = 12430
-99; //负数-99
NaN; //表示 Not a Number，当无法计算结果时用NaN表示 
Infinity; //Infinity表示无限大，当数值超过了JavaScript中所能表示的最大值时，就表示为Infinity

//使用
console.log(Number.MAX_VALUE)
//即可获得JavaScript中所能表示的最大值，为1.7976931348623157e+308

//使用
console.log(Number.MIN_VALUE)
//即可获得JavaScript中所能表示的最小值，为5e-324
```

除此之外，在数字前用`0`开头为八进制，用`0x`开头为16进制。

`Number`可以直接做四则运算，规律和数学一致：

```javascript
1 + 2; //3
(1 + 2) * 5 / 2; //7.5
2 / 0; //Infinity
0 / 0; //NaN
10 % 3; //1 %是求余运算
10.5 % 3; //1.5
```



###### 字符串

用单双引号括起来的任意文本

###### 布尔值

```javascript
ture; //这是一个true值，在数字中表示为1
false; //这是一个false值，在数字中表示为0
2 > 1; //这是一个true值
2 >= 3; //这是一个false值
```



还有`&&`运算，只有所有值都为`true`时运算结果才为`true`

```javascript
true && false; //运算结果是一个false值
false && true && false; //运算结果是一个false值
```

及` ||` 运算，一个值为`true`运算结果就为`true`

```javascript
false || false; //运算结果是false
false || true; //运算结果是true
false || true || false; //运算结果是true
```

`！`运算

```javascript
!true; //结果为false
!false; //结果为true
!(2 > 5); //结果为true
```

布尔值经常在条件判断中出现，例如

```javascript
var age = 15;
if (age >= 18){
	alert('adult')
} else{
	alert('teenager')
}
```

###### 比较运算符

当我们对`Number`作比较时，可以通过运算符得到一个布尔值：

```javascript
 2 > 5; //false
 5 >= 2; //true
 7 == 7; true
```

实际上，JavaScript支持对任意数据进行比较：

```javascript
false == 0; //true
false === 0; //false
'12' > 9; //true
```

特别需要注意` ==` 与 `===`，在JavaScript之初，有两种比较运算符。第一种是 `==`，会自动转换数据类型再比较，很多时候会得到比较诡异的结果。第二种是`===` ，不会自动转换类型，如果数据类型不一致会返回false，如果一致，会继续比较下去。不要使用` ==` 进行比较，坚持使用 `===` 比较。

另一个是`NaN`，这个值于其他任何值都不相等，包括它自己：

```javascript
NaN === NaN; //false
```

唯一能判断`NaN`的方法是通过`isNaN()`函数：


```javascript
isNaN(NaN); //true
```

最后要注意浮点数的相等比较：

```javascript
1 / 3 === (1 - 2 / 3); //false
/*这不是JavaScript的设计缺陷，而是浮点数在运算过程过程中会产生误差。所以只能计算它们差的绝对
值，看是否小于某个值*/
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.00000001;
//true
```

###### `null` 和 `undefined`

`null` 表示一个“空”的值，它和`0`以及字符串`""`不同,`0`是一个值，`""`是一个长度为0的字符串，而`null`表示“空”。例如在`Python`中用`None`表示。

`undefined`表示未定义

###### 数组

数组是一组按顺序排列的集合，集合的每个值称为元素。JavaScript的数组可以包括任意数据类型。

```javascript
[1, 2, 3.14, 'Hello', null, true];
```

上述数组包含6个元素。数组用`[]`表示，元素之间用`,`分隔。

另一种创建数组的方法是通过`Array()`函数实现：

```javascript
new Array(1, 2, 3); // 创建了数组[1, 2, 3]
```

然而，出于代码的可读性考虑，强烈建议直接使用`[]`。

数组的元素可以通过索引来访问。请注意，索引的起始值为`0`：

```javascript
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined
```

###### 对象

JavaScript的对象是一组由键-值组成的无序集合，例如：

```javascript
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
```

JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述`person`对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，`person`的`name`属性为`'Bob'`，`zipcode`属性为`null`。

要获取一个对象的属性，我们用`对象变量.属性名`的方式：

```javascript
person.name; // 'Bob'
person.zipcode; // null
```



###### 变量

```javascript
var a; //声明了变量a,但此时a的值为undefined
var $b = 1; //声明了变量$b, 同时给$b赋值, $b的值为1;
var s_007 = '007'; //声明了变量s_007,并赋值,s_007的值为007,是一个字符串
var Answer = true; //Answer是一个布尔值true
var t = null; //t的值是null
```

在JavaScript中，使用等号`=`对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用`var`申明一次，例如：

```javascript
var a = 123; // a的值是整数123
a = 'ABC'; // a变为字符串
```

这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，赋值语句如下：

```javascript
int a = 123; // a是整数类型变量，类型用int申明
a = "ABC"; // 错误：不能把字符串赋给整型变量
```

和静态语言相比，动态语言更灵活，就是这个原因。

请不要把赋值语句的等号等同于数学的等号。比如下面的代码：

```javascript
var x = 10;
x = x + 2;
```

如果从数学上理解`x = x + 2`那无论如何是不成立的，在程序中，赋值语句先计算右侧的表达式`x + 2`，得到结果`12`，再赋给变量`x`。由于`x`之前的值是`10`，重新赋值后，`x`的值变成`12`。

###### strict模式

JavaScript在设计之初，为了方便初学者学习，并不强制要求用`var`申明变量。这个设计错误带来了严重的后果：如果一个变量没有通过`var`申明就被使用，那么该变量就自动被申明为全局变量：

```javascript
i = 10; // i现在是全局变量
```

在同一个页面的不同的JavaScript文件中，如果都不用`var`申明，恰好都使用了变量`i`，将造成变量`i`互相影响，产生难以调试的错误结果。

使用`var`申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突。

为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过`var`申明变量，未使用`var`申明变量就使用的，将导致运行错误。

启用strict模式的方法是在JavaScript代码的第一行写上：

```javascript
'use strict';
```

这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。

来测试一下你的浏览器是否能支持strict模式：

```javascript
'use strict';
// 如果浏览器支持strict模式，
// 下面的代码将报ReferenceError错误:
```

######  Run

```javascript
abc = 'Hello, world';
console.log(abc);
```

运行代码，如果浏览器报错，请修复后再运行。如果浏览器不报错，说明浏览器太古老了，需要尽快升级。

不用`var`申明的变量会被视为全局变量，为了避免这一缺陷，所有的JavaScript代码都应该使用strict模式。我们在后面编写的JavaScript代码将全部采用strict模式。

