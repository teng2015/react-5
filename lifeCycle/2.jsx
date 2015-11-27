var LifeCycle = React.createClass({
    getDefaultProps:function(){
    },
    getInitialState:function(){

        return {
            "message":0
        };
    },
    componentWillMount:function(){

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
                <Children message={this.state.message}></Children>
                <button onClick={this.killMyself} className="button button-glow button-rounded button-small button-raised button-primary">kill this component</button>
                <button onClick={this.doUpdate} className="button button-small button-primary">手动更新一下</button>

            </div>
        );
    },
    componentDidMount:function(){
        //console.log("componentDidMount");  手动更新并不会触发此方法
    },
    componentWillUnmount:function(){
        console.log('组件从DOM中被移除的时候调用,比如在某些组件里面添加了事件监听，或者定时器等，那就可以用到这个方法');
        alert('are you kidding me?');
        clearInterval(this.aa); // 清楚定时器
    },


    doUpdate:function(){
        this.setState({
           "message":this.state.message+1
        });
    },
    // update阶段
    componentWillReceiveProps:function(){
        console.log('componentWillReceiveProps,这个方法对子组件的是比较有用的');
    },

    shouldComponentUpdate:function(nextProp,nextState) {
        console.log('shouldComponentUpdate，它是否应该被更新');
            if(nextState.message>10)return false; // 此方法中用于添加限制状态/属性变化上限的业务逻辑  比如状态改变上限为3

        return true  // 切记，这个return true 不加的话 会阻塞组件更新自己内部的状态以及数据
    }
    ,
    componentWillUpdate:function(){

        console.log('componentWillUpdate，这里做一些数据处理，并不可以取消 更新的操作');
    },
    componentDidUpdate:function(){

        console.log('componentDidUpdate');
    },




});








var title = {
    "name":"alex"
};

var Children = React.createClass({
    componentWillReceiveProps:function(nextProp){
        console.log('子组件将要获得props');
    },
    shouldComponentUpdate:function(nextProp,nextState){
        if(nextProp.message>3)return false;
        return true
    },
    render:function(){
        return (
            <div>
                <div className="h3">{this.props.message}</div>
                <code>来源于子组件</code>
            </div>
        )
    }
});


React.render(<LifeCycle title={title}/>, document.getElementById('app'));