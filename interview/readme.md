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

# git
开发中如何使用git 

- 安装开发环境
    - node
    - git 环境 开源的分布式版本管理软件
    - 公司会发放一个git 账号，私有项目
- git config --global user.name ""
    git config --global user.email ""
- 入职 git clone 公司代码
    - 主分支 main/master
        所有人都在用的，线上分支
    - 新开一个分支
    git checkout -b xxx
    git branch
    git checkout main
- 常用命令
    git pull origin main 每天上班前的动作
    git status 当前git 状态
    git log --oneline  查看提交记录
    git add . 提交到暂存区
    git commit -m '' 提交到仓库
    git push origin main
- 场景
    - 回退
    git restore --staged algorithm/readme.md



