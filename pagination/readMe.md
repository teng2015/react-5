#react
>react.js的基础用法

##pagination

>需求:因为是后端已经做过数据库分页，所以前端只需传入pageSize(每页多少条)和pageNumber(第几页)即可获取数据，因此
>分页组件需要记录用户选择的pageSize和pageNumber并存入到setState中备用；其次，需要获取后端返回的pageNumber来显示
>可翻阅的分页页码数；

注：未添加ajax操作，使用时可针对具体项目需求，在对应的lefeCycle钩子函数中添加ajax操作即可；另：部分css可以优化，比如必要时添加左翻页和右翻页的禁用效果。
