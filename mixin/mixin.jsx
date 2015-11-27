var LifeCycle = React.createClass({
    getInitialState:function(){
        return {
            message:[],
            name:"alex"
        }
    },
    render: function(){
        console.log("render");
        return (
            <div>
                <div className="h1">{this.state.name}</div>
                <Children message={this.state.message}></Children>
                <button className="button button-glow button-rounded button-small button-raised button-primary">kill this component</button>
                <button className="button button-small button-primary">手动更新一下</button>
            </div>
        );
    }

});



var Children = React.createClass({
    propTypes:{
        message:React.PropTypes.array.isRequired  // 用于校验传递下来的props
    },
    getDefaultProps:function(){
        return {
            message:['default']
        }
    },
    render:function(){
        var msg = [];
        this.props.message.forEach(function(obj,index){
            msg.push(obj);
        });
        return (
            <div>
                <div className="h3">{msg}</div>
                <code>来源于子组件</code>
            </div>
        )
    }
});


React.render(<LifeCycle/>, document.getElementById('app'));