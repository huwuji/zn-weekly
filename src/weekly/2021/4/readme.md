1. [为什么顺序调用对 React Hooks 很重要？](https://overreacted.io/zh-hans/why-do-hooks-rely-on-call-order/)
> 1）钻石问题(多层继承问题)   
> 1.1)依赖于固定的顺序调用很自然的解决了「钻石」问题   
> 1.2)函数调用不会有「钻石」问题，因为它们会形成树状结构

简单来说，hooks处理复用和组件(逻辑)更好的实现解耦。
1) hooks是基于函数，拥有函数的特性和优势。
2）hooks依赖数组实现的顺序调用。保证调用的预期一致性。

2. [我所理解的hooks](https://www.mdeditor.tw/pl/gVeM)
> 用数学函数的方式去理解

3. [解剖postCSS —— 向前端架构师迈出一小步](https://mp.weixin.qq.com/s/P4Uj9g71u5lDzYi9JaMCow)

4. css 的权重问题
    参考：https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity
    选择器的分类和使用：https://www.zoo.team/article/about-css-selector

5. [所有前端都要看的2D游戏化互动入门基础知识](https://zhuanlan.zhihu.com/p/366660167)
>Eva.js https://eva-engine.gitee.io/#/
>最早做过u3d开发，有从u3d应用转化导出对应的web应用。随着基础设施的强大，web普及和浏览器的性能提升，基于浏览器的‘互动游戏’引擎是怎样？值得学习。