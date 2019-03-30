
/**
 * 数组去重
 * 去除data中相同id的一组数据
 */

let data = [
  {
    id: 1,
    name: '张三'
  },
  {
    id: 2,
    name: 'Jocy'
  },
  {
    id: 3,
    name: 'Luna'
  },
  {
    id: 3,
    name: 'lalalal'
  }
]
let obj = {}
let b = data.reduce((a, b) => {
  obj[b.id] ? false : obj[b.id] = true && a.push(b)
  return a
}, [])
console.log(b, 'b')