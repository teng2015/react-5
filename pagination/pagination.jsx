
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

    getDefaultProps:function(){
        return {
            totalPage: 0,
            totalIndex:0
        }
    },
    render:function(){
        var msg = [];
        for(var i=0;i<5;i++){
            this.props.totalIndex++;
            msg.push(
                <Pagination_middle totalIndex = {this.props.totalIndex}/>
            );
        };
        return (
            <div>

                <ul className="pagination">
                    <Pagination_left totalIndex = {this.props.totalIndex}/>
                    {msg}
                    <Pagination_right totalIndex = {this.props.totalIndex}/>
                </ul>

            </div>
        )
    }
});

var Pagination_left = React.createClass({

    minus:function(){
        console.log('left'+this.props.totalIndex);
    },
    render:function(){
        return (
            <li onClick={this.minus}>
                <a href="javascript:;" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        )
    }
});

var Pagination_right = React.createClass({
    add:function(){
        console.log('right'+this.props.totalIndex);
    },
    render:function(){
        return (
            <li onClick={this.add}>
                <a href="javascript:;" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
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
                   <a href="javascript:;" ref="page" onClick={this.changePageNumber}>{this.props.totalIndex}</a>
               </li>

       )
   }
});


var Pagination = React.createClass({
    getInitialState:function(){
      return {
          pageNum: 1,
          pageSize: 50,
          totalElements: 494,
          totalPage: 10
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