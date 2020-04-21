forEach()

// 常用于对数组自身的改变和各元素相关统计性的计算

// 可以改变数组自身 / 没有返回值 / 中途不能跳出循环

// 注意: 只有 item 是引用类型才可以改变数组, 值类型无效.




map()

// 原数组不会改变 返回一个新数组

// 每一项 item 是调用函数返回的结果

let arr = [1,2,3];
arr = arr.map(item => { return item * 2 })

// 注意: 如果用 map 过滤是不行的
let newArr = [1,2,3,4,5].map(item => { if(item > 3) return item })
// => [undefined, undefined, undefined, 4, 5]




filter()

// 返回一个新数组

// 每一项 item 是调用函数筛选出来符合条件的结果

let newArr = [1,2,3,4,5].filter(item => {
  if(item > 3) return item 
})
//  => [4,5]




sort()

// 直接改变原数组

// 默认排序:
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]

// 自定义
arr.sort((x, y) => {
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
// [1, 2, 10, 20]




some()

// 返回布尔值

// 数组只要有一项满足即返回 true，之后的不再执行(所以说对性能很友好！)。

const result = [
  {name:'鸣人',age:16},
  {name:'佐助',age:17}
].some(item => {
 return item.age > 16 
});
// true




every()

// 数组中的每一项只有都满足了才会返回 true

const result = [
  {name:'鸣人',age:16},
  {name:'佐助',age:17}
].every(item => {
 return item.age > 16 
});
// false




// 其他常用


// 数组去重

const arr = [...new Set(arr1)]

// 注意: Set() 没法去重元素是引用对象的数组

// 解决方案: Lodash 的 _.uniqWith()
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
_.uniqWith(objects, _.isEqual);
// _.isEqual(value,other)用于执行深比较来确定两者的值是否相等。 _.uniqWith()做去重处理。




// 获取数组中指定元素

find() // 返回第一个匹配到的元素本身
findIndex() // 返回索引

// 虽然 filter() 确实可以做到 但是会从头遍历到尾 出于性能的考虑 find() 可以找到匹配项就终止

let testArr = [{name:'鸣人',age:16},{name:'佐助',age:17},{name:'卡卡西',age:27},{name:'佐助',age:17}]
let result = testArr.find(item => { return item.name == '佐助'});
// => { name:'佐助',age:17 }




includes()

// 返回布尔值表示某个数组是否包含给定的值

// indexOf()它会返回 -1 和元素的位置来表示包含的意思 不够语义化 也不能判断是否包含NaN元素