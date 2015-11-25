
var Pagination_select = React.createClass({
    getInitialState: function(){
        return {

        }
    },
    changePageSize:function(){
        var select = this.refs.select.getDOMNode().value;
        this.props.alertSizeNumber(select,'');
    },
    render:function(){
        return (
            <div>
                <div>
                    <select className="Pagination_select" ref="select" onChange={this.changePageSize}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
        )
    }
});

var Pagination_options = React.createClass({
    getInitialState:function(){
        return {
            initialIndex:0
        }
    },
    getDefaultProps:function(){
        return {
            totalPage:0,
            firstIndex:0
        }
    },
    minus:function(){
        if(this.state.initialIndex>0){
            this.setState({
                initialIndex: this.state.initialIndex - 1,
            });
        }else{
            alert('不能再小了，此处稍后加上一个禁用的样式');
        }

    },
    add:function(){
        if(this.state.initialIndex < this.props.totalPage-5){
            this.setState({
                initialIndex: this.state.initialIndex + 1,
            });
        }else{
            alert('不能再大了,此处稍后加上一个禁用的样式');
        }
    },
    render:function(){
        var msg = [],
            i = this.state.initialIndex,
            index = this.state.initialIndex,
            l= i+5,
            // 当总分页数不足5的时候
            min = this.props.totalPage;

        if(min<5){
            for(i;i<min;i++){
                index++;
                msg.push(
                    <Pagination_middle firstIndex = {index}  alertSizeNumber={this.props.alertSizeNumber}/>
                );
            };
        }else{
            for(i;i<l;i++){
                index++;
                msg.push(
                    <Pagination_middle firstIndex = {index} alertSizeNumber={this.props.alertSizeNumber}/>
                );
            };
        }

        return (
            <div>

                <ul className="pagination">
                    <li onClick={this.minus}>
                        <a href="javascript:;" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {msg}
                    <li onClick={this.add}>
                        <a href="javascript:;" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>

            </div>
        )
    }
});


var Pagination_middle = React.createClass({
    changePageNumber:function(){
        var number = this.refs.page.getDOMNode().text;
        console.log('you hit me, the number is'+ number);
        this.props.alertSizeNumber('',number);
    },
   render:function(){
       return (
               <li>
                   <a href="javascript:;" ref="page" onClick={this.changePageNumber}>{this.props.firstIndex}</a>
               </li>

       )
   }
});


var Pagination = React.createClass({
    getInitialState:function(){
        return {
            // myPageSize 和 myPageNumber 为前端提交分页请求时的分页信息；
            myPageSize:50,   // 默认以每页50条数据返回；
            myPageNumber:1,   // 默认返回第一页

            // 下面这四项为 服务器从后端吐出来的初始化分页信息；
            pageNum: 1,
            pageSize: 50,
            totalElements: 494,
            totalPage: 20
        }
    },
    alertSizeNumber:function(pageSize,pageNumber){

        if(pageSize==""){
            this.setState({
                myPageNumber:pageNumber
            });
            alert('现在pageSize是'+this.state.myPageSize+'现在pageNumber是'+pageNumber)
        };

        if(pageNumber==""){
            this.setState({
                myPageSize:pageSize
            });
            alert('现在pageSize是'+pageSize+'现在pageNumber是'+this.state.myPageNumber);
        }
    },

    render:function(){
        return (
            <div>
                <Pagination_select alertSizeNumber={this.alertSizeNumber}/>
                <Pagination_options totalPage={this.state.totalPage}  alertSizeNumber={this.alertSizeNumber}/>
            </div>
        )
    }
});



React.render(<Pagination/>,document.getElementById('app'));