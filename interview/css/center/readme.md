# 居中
研究对手
- 听清什么居中
    - 水平/垂直
- 方法不是关键，区别和优劣
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height + padding上下
    - 固定宽高块级盒子水平垂直居中 
        absolute (top: 50%;left: 50%;)+ margin 负值
        absolute (top: 0;left: 0;right: 0;bottom: 0;)+ margin auto (重要)
        absolute + calc (css calc 计算函数) 缺点是性能差，很少用
        缺点需要知道盒子宽高
        
    - 不固定宽高块级盒子水平垂直居中 
        absolute + transform: translate(-50%, -50%);
        line-height + vertical-align: middle; （行内元素）
        writing-mode




