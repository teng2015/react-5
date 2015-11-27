var LifeCycle = React.createClass({
    getDefaultProps:function(){
        console.log("getDefaultProps");
        return {

        }

    },
    getInitialState:function(){
        console.log("getInitialState");
        return {
            "message":0
        };
    },
    componentWillMount:function(){
        console.log('componentWillMount');
        console.log('这里是渲染组件前，最后一次更改状态');
        var self = this;
        this.aa = setInterval(function(){
            self.setState({
                "message":self.state.message + 1
            })
        },1000);


    },
    killMyself:function(){
        React.unmountComponentAtNode(document.getElementById('app'));
    },
    render: function(){
        console.log("render");
        return (
           <div>
               <div className="h1">{this.props.title.name}</div>
               <div className="h2">{this.state.message}</div>
               <button onClick={this.killMyself} className="button button-glow button-rounded button-small button-raised button-primary">kill this component</button>
           </div>
        );
    },
    componentDidMount:function(){
        console.log(this.getDOMNode());
        console.log('这里可以获取DOM,做DOM操作，做AJAX操作');
    },
    componentWillReceiveProps:function(){
        console.log('componentWillReceiveProps');
    },
    shouldComponentUpdate:function(){
        console.log('shouldComponentUpdate');
    },
    componentWillUpdate:function(){
        console.log('componentWillUpdate');
    },
    componentDidUpdate:function(){
        console.log('componentDidUpdate');
    },

    componentWillUnmount:function(){
        console.log('组件从DOM中被移除的时候调用,比如在某些组件里面添加了事件监听，或者定时器等，那就可以用到这个方法');
        alert('are you kidding me?');
        clearInterval(this.aa); // 清楚定时器
    }
});








var title = {
    "name":"alex"
}


React.render(<LifeCycle title={title}/>, document.getElementById('app'));