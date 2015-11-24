
var Pagination_select = React.createClass({
    getInitialState: function(){
        return {

        }
    },
    changePageSize:function(){
        console.log(this.refs.select.getDOMNode().value);
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
        console.log('this.props.totalPage' + this.props.totalPage);
        console.log('this.state.initialIndex' + this.state.initialIndex);
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
                    <Pagination_middle firstIndex = {index}/>
                );
            };
        }else{
            for(i;i<l;i++){
                index++;
                msg.push(
                    <Pagination_middle firstIndex = {index}/>
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
        console.log('you hit me, the number is'+ this.refs.page.getDOMNode().text);
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
        // 这里为ajax返回的数据
      return {
          pageNum: 1,
          pageSize: 50,
          totalElements: 494,
          totalPage: 11
      }
    },
    render:function(){
        return (
            <div>
                <Pagination_select/>
                <Pagination_options totalPage={this.state.totalPage}/>
            </div>
        )
    }
});



React.render(<Pagination/>,document.getElementById('app'));