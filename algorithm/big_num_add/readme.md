# 大数相加

- 高精度 
  js Number 类型， 不分整数、浮点数、高精度...
  js 不太适合计算 python 适合
  表现力强
- 大数字
  边界问题
  Infinity
  -Infinity
  Number.MAX_VALUE
- 字符串化
   
## BigInt
  安全 2^53 - 1  9007199254740991
  es6 新增是第六种简单数据类型
  后面加 n
  BigInt("123"), 不能new
  无限大， 无溢出问题
  不能混合 Number 和 BigInt 运算
  js 适合大型语言项目开发