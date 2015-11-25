var DataGrid = React.createClass({
    render: function () {
        return (
            <div className="container panel_style">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel title</h3>
                    </div>
                    <Table th={this.props.th}/>
                </div>
            </div>
        )
    }
});

var th = {

        "authority": "权限",
        "canUseAmount": "可用额度",
        "idLevel": "级别",
        "nickName": "昵称",
        "status": "账户状态",
        "totalAmount": "总额度",
        "userId": "用户ID",
        "options":""
    };

var Table = React.createClass({
    getInitialState: function () {
        return {
            "data": {
                "template":{},
                "pageInfo": {"pageNum": 1, "pageSize": 50, "totalElements": 496, "totalPage": 10},
                "rows": [{
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "LiWei",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034952
                }, {
                    "authority": "普通用户",
                    "nickName": "o2o_unselt",
                    "status": "正常",
                    "userId": 100034951
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "32.00",
                    "idLevel": "3",
                    "nickName": "o2o_testun",
                    "status": "正常",
                    "totalAmount": "32.00",
                    "userId": 100034950
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "111test",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034949
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "爱在他乡",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034948
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "会很尴尬",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034947
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "不会分别",
                    "status": "冻结",
                    "totalAmount": "未认证",
                    "userId": 100034946
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "mkkcand",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034945
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "o2o_o2o04a",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034944
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "o2o_o2o03a",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034943
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "200009.00",
                    "idLevel": "3",
                    "nickName": "o2o_o2o02a",
                    "status": "正常",
                    "totalAmount": "200009.00",
                    "userId": 100034942
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "o2o_unselect",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034941
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "回家干活",
                    "status": "冻结",
                    "totalAmount": "未认证",
                    "userId": 100034940
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "bhghbh",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034939
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "胡椒粉改革",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034938
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "Hktest",
                    "status": "封禁+冻结",
                    "totalAmount": "未认证",
                    "userId": 100034937
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "20000.00",
                    "idLevel": "3",
                    "nickName": "o2o_o2o01a",
                    "status": "正常",
                    "totalAmount": "20000.00",
                    "userId": 100034936
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "hjbvg",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034935
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "买买买呢",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034934
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "好斤斤计较8",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034933
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "vbbhhj",
                    "status": "封禁",
                    "totalAmount": "未认证",
                    "userId": 100034932
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "bbnnand",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034931
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "bjbh",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034930
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "好好唱歌",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034929
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "和江河湖海",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034928
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "humanhh",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034927
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "hhghh",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034926
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "20000000.00",
                    "idLevel": "3",
                    "nickName": "tes12DE",
                    "status": "正常",
                    "totalAmount": "20000000.00",
                    "userId": 100034925
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "好斤斤计较",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034924
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "20000000.00",
                    "idLevel": "3",
                    "nickName": "tes1213",
                    "status": "正常",
                    "totalAmount": "20000000.00",
                    "userId": 100034923
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "比较公积金",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034922
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "靠近乎换个",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034921
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "给会很尴尬",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034920
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "shdhdhsdkdk",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034919
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "zxjxj",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034918
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "sudjdj",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034917
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "Shdhd",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034916
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "jdjdj",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034915
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "sjdjdj",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034914
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "不及格方便黄海",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034913
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "呵呵哈哈哈就",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034912
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "东道国回家",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034911
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "好几个更好",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034910
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "好几个好姐姐",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034909
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "13112332117",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034908
                }, {
                    "authority": "普通用户",
                    "nickName": "13112332116",
                    "status": "正常",
                    "userId": 100034907
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "test43",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034906
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "刚回家就好好",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034905
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "发挥宏观规划",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034904
                }, {
                    "authority": "普通用户",
                    "canUseAmount": "未认证",
                    "nickName": "不好好过",
                    "status": "正常",
                    "totalAmount": "未认证",
                    "userId": 100034903
                }],
                "total": 496
            }, "message": "", "status": 0
        }
    },
    render: function () {
        var th = [],
            tr = [];
        this.props.th.forEach(function(msg,index){
            th.push(
                <Th title={}/>
            )
        });
        this.state.data = '';
        return (
            <div className="panel-body">
                <table className="table table-striped">
                    <thead>
                    <Th/>
                    <Th/>
                    <Th/>
                    <Th/>
                    <Th/>
                    </thead>
                    <tbody>
                    <Tr/>
                    <Tr/>
                    <Tr/>
                    <Tr/>
                    <Tr/>
                    </tbody>
                </table>
            </div>
        )
    }
});

var Th = React.createClass({
    render: function () {
        return (
            <div>
                <th>username</th>
            </div>
        )
    }
});


var Tr = React.createClass({
    render: function () {
        return (
            <tr>
                <Td/>
                <Td/>
                <Td/>
                <Td/>
                <Td/>
            </tr>
        )
    }
});

var Td = React.createClass({
    render: function () {
        return (
            <td>
                <button className="button button-glow button-rounded button-small button-raised button-primary">add
                </button>
            </td>
        )
    }
});

React.render(<DataGrid th={th}/>, document.getElementById('app'));