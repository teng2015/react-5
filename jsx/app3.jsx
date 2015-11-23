/**
 * event and form；
 * 1.操作表单
 * 2.使用ajax 提交表单
 *
 *
 */
class Count extends React.Component{

    constructor(){
        this.state={
            count:0
        }
    }

    update(){
        this.setState({
            count:++this.state.count
        });
    }
    render(){
        return (
            <div>
                <h1>hello,leo</h1>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}

class Comment extends React.Component{
    render(){
        return (
            <div>
                <div className="comment-body">
                    {this.props.children}
                </div>
                <div className="comment-author">
                    {this.props.author}
                </div>
            </div>
        )
    }
}


var comments = [
    {
        author:'alex',
        body:'this is my comments'
    },
    {
        author:'leo',
        body:'this is leo'
    },
    {
        author:'micheal',
        body:'this is micheal'
    }
];

class CommentList extends React.Component{
    render() {
        var comment = this.props.comments.map(function(comment,index){
            return (
                <div>
                    <Comment key={'comment-'+index}  author={comment.author}>{comment.body}</Comment>
                </div>
            )
        });
        return (
            <div className="comment-list">
                {comment}
            </div>
        )
    }
}



class CommentForm extends React.Component {
    constructor(){

    };


    handleSubmit(e){

        e.preventDefault(); // 阻止浏览器刷新；
        const author = this.refs.author.getDOMNode().value.trim();               // es6语法: 定义一个常量
        const body = this.refs.body.getDOMNode().value.trim();
        const form = this.refs.form.getDOMNode();
        console.log(author,body);


        // 提交数据到服务器

        this.props.onSubmit({"author":author,"body":body});

        form.reset();  // 重置表单的方法；
    };


    render() {                            // ref  获取表单对象；
        return (
            <div>
                <form className="comment-form" ref="form" onSubmit={ e =>{this.handleSubmit(e)}} >
                    <input type="text" placeholder="username" ref="author"/>
                    <input type="text" placeholder="Input your comment" ref="body"/>
                    <input type="submit" value="Add Comment"/>
                </form>
            </div>

        )
    }

}

class CommentBox extends React.Component{
    constructor(){
        super(); // 继承父级
        this.state={
            comments:[
                {
                    author:'alex',
                    body:'this is my comments'
                },
                {
                    author:'leo',
                    body:'this is leo'
                }
            ]
        }
    };

    loadDataFormServer(){

        $.ajax({
            url:'comments.json',
            dataType:'json',

            //success:function(data){
            //    _this.setState({comments:data});
            //},
            success:data => {  // 箭头函数，如果只有一个参数的时候，可以省略（）
                this.setState({comments:data});
            },
            error:(xhr,error) => {
                console.log(xhr);
                console.log(error);
            }
        })
    }

    componentDidMount(){
        // 加载服务器端请求
        this.loadDataFormServer();
    };

    handleNewComment(comment){
        // 加载loading
        const comments = this.state.comments;
        const newComments = comments.concat([comment]);
        this.setState({comments:newComments});    // 此思路为先假设加载成功，不等loading;

        setTimeout(()=>{
            $.ajax({
                url:'browser-sync/browser-sync',
                dataType:"json",
                type:"POST",
                data:comment,
                success:comments=>{
                    this.setState({comments:comments})
                },
                error:(xhr,error)=>{
                    console.log(error.toString());
                    // 因为此次ajax必定失败，所以一定数据一定会流到error方法,所以还原为初始数据；
                    this.setState({comments:comments});
                }
            })
        },2000);

    }


    render(){
        return (
            <div className="comment-box">
                <h1>leo</h1>
                <CommentList comments={this.state.comments}/>
                <CommentForm onSubmit={comment=>{this.handleNewComment(comment)}}/>
            </div>
        )
    }
}



count = React.render(
    <CommentBox/>,document.getElementById('app')
);


