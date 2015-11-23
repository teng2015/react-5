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
    render() {
        return (
            <div className="comment-form">
                CommentForm
            </div>
        )
    }

}

class CommentBox extends React.Component{
    render(){
        return (
            <div className="comment-box">
                <h1>leo</h1>
                <CommentList comments={comments}/>
                <CommentForm/>
            </div>
        )
    }
}



  count = React.render(
    <CommentBox/>,document.getElementById('app')
);


