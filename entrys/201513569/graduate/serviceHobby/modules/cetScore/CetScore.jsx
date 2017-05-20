import React from 'react';
import {render} from 'react-dom';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');
var _val = "";
var CetScore=React.createClass({
    getCetScore:function() {
        var url="/bsuims/reactPageDataRequest.do";
        var params={
            reactPageName:"registerRulePage",
            reactActionName:"getCetScoreReact"
        };
        ProxyQ.queryHandle(
            null,
            url,
            params,
            null,
            function (response) {
                if(response.data[1]!==null){
                    this.setState({cet:response.data[0]})
                }
            }.bind(this)
        );
    },
    changeInfo:function () {
        $('#cet4').removeAttr("disabled");
        $('#cet6').removeAttr("disabled");
        this.setState({flag:1});
    },
    updateInfo:function () {
        var a=$('#cet4').val();
        var b=$('#cet6').val();

        if (b==null||b==undefined||b.length==0){
            alert("六级成绩必须输入！无效六级成绩请输入0！");
        }else {
            if (isNaN(b)||isNaN(a)) {
                b = _val;
                a = _val;
                alert("只能输入数字!");
            } else {

                $('#cet4').attr("disabled", true);
                $('#cet6').attr("disabled", true);

                this.setState({flag: 0});
                var url = "/bsuims/reactPageDataRequest.do";
                var params = {
                    reactPageName: "registerRulePage",
                    reactActionName: "updateCetScoreReact",
                    cet4: a,
                    cet6: b
                };
                ProxyQ.queryHandle(
                    null,
                    url,
                    params,
                    null,
                    function (response) {
                        var c = response;
                    }.bind(this)
                );
            }
        }
    },
    getInitialState:function(){
        this.getCetScore();
          return({
                cet:null,
                flag:0
          })
    },
    initialData:function(){
        this.getCetScore();
    },
    render:function(){
        var contains=null;
        if(this.state.cet!==undefined&&this.state.cet!==null){
            var cet4=this.state.cet[0];
            var cet6=this.state.cet[1];
            var flag=0;
            contains=
                <div style={{borderStyle: 'double',borderColor: '#2f8dbc'}}>
                    <div style={{ padding: '10px'}}>
                        <div style={{ borderStyle: 'solid', borderColor: '#2f8dbc', borderWidth: 'thin', marginBottom: '20px', textIndent: '15px'}}>
                        <span><span style={{color:'red'}}>提示：</span>
                            <p>一、  填写时只能填写数字格式。</p>
                            <p>二、  六级成绩必填，四级成绩选填。如果没有获得有效六级成绩填0，否则无法提交。</p>
                        </span>
                        </div>
                        <table style={{textAlign: 'center',width:'100%'}}>
                            <thead>
                            <tr>
                                <th style={{borderStyle: 'solid', borderWidth: 'thin', borderColor: '#2f8dbc',textAlign: 'center'}}>四级成绩</th>
                                <th style={{borderStyle: 'solid', borderWidth: 'thin', borderColor: '#2f8dbc',textAlign: 'center'}}>六级成绩</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{borderStyle: 'solid', borderWidth: 'thin', borderColor: '#2f8dbc', height:'45px'}}><input id="cet4" defaultValue={cet4} disabled={true}/></td>
                                <td style={{borderStyle: 'solid', borderWidth: 'thin', borderColor: '#2f8dbc', height:'45px'}}><input id="cet6" defaultValue={cet6} disabled={true}/></td>
                            </tr>
                            </tbody>
                        </table>
                        <div style={{marginTop:'25px'}}>
                            {this.state.flag==0?
                                <button style={{marginLeft:'36em', width: '60px'}} onClick={this.changeInfo} >修改</button>:
                                <button style={{marginLeft:'36em', width: '60px'}} onClick={this.updateInfo}>提交</button>
                            }

                        </div>

                    </div>
                </div>
        }else {
            this.initialData();
        }
        return contains
    }
})
module.exports=CetScore;
