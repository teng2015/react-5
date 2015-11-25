var DataGrid = React.createClass({
    render:function(){
        return (
                <div className="container panel_style">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Panel title</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-bordered">
                                <thead>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>options</th>
                                    <th>state</th>
                                    <th>worker</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>alex</td>
                                        <td>alex@alex.com</td>
                                        <td>undefined</td>
                                        <td>open</td>
                                        <td><button className="btn btn-primary btn-sm">add</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )
    }
});

React.render(<DataGrid/>,document.getElementById('app'));