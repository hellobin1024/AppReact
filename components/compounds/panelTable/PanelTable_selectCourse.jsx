/**
 * Created by dell on 2016/8/29.
 */
import React from 'react';
import {render} from 'react-dom';
import Panel_selectCourse from '../../panel/Panel_selectCourse.jsx';
import OrdinaryTable_selectCourse from '../../forms/OrdinaryTable_selectCourse.jsx';
import Pagination from '../../../components/basic/Pagination.jsx';
var ProxyQ=require('../../proxy/ProxyQ');

var PanelTable_selectCourse=React.createClass({
    clickReturn:function(ob){
        if(this.props.clickReturn!==undefined&&this.props.clickReturn!==null)
        {
            this.props.clickReturn(ob);
        }
    },

    clickHandle:function(ob){
        if(this.props.query!==undefined&&this.props.query!==null)
        {
            var params;
            params=Object.assign(this.props.query.params!==null&&this.props.query.params!==undefined?this.props.query.params:'',
                ob!==undefined&&ob!==null?ob:'');
            ProxyQ.queryHandle(
                null,
                this.props.query.url,
                params,
                null,
                function(response){
                    //这里需要统一规范后台返回的数据格式
                    var ob=new Object();
                    if(response.arr!==undefined&&response.arr!==null)
                        ob.data=response.arr;
                    if(response.tail!==undefined&&response.tail!==null)
                    {
                        try{
                            ob.tail=eval(response.tail);
                        }catch(e)
                        {
                            alert("error="+e);
                        }
                    }
                    if(response.translation!==undefined&&response.translation!==null){
                        ob.translation=response.translation;
                    }
                    if(response.pageInfo!==undefined&&response.pageInfo!==null)
                    {
                        ob.pageInfo=response.pageInfo;
                    }
                    else {
                        var length =response.arr.length;
                        console.log();
                        console.log();
                        ob.pageInfo = {
                            perSize: 40,
                            size   : length
                        };
                    }
                    this.setState(ob);
                }.bind(this)
            );


        }
    },
    pageCb:function(ob){
        if(Object.prototype.toString.call(ob)=='[object Object]')
        {
            this.setState({pageInfo: ob});
        }
    },
    goGetPageData:function(data)
    {
        if(data!==undefined&&data!==null)
        {
            var selected = 0;
            var perSize = 40;
            if (this.state.pageInfo !== undefined && this.state.pageInfo !== null) {
                selected = this.state.pageInfo.selected;
                perSize = this.state.pageInfo.perSize;
            }
            return data.slice(selected * perSize, (selected + 1) * perSize > data.length ? data.length : (selected + 1) * perSize);
        }

    },
    getInitialState:function(){

        var comps;
        var data;
        if(this.props.comps!==undefined&&this.props.comps!==null)
        {
            comps=this.props.comps;
        }
        if(this.props.data!==undefined&&this.props.data!==null)
        {
            data=this.props.data;
        }
        var bean;
        if(this.props.bean!==undefined&&this.props.bean!==null)
            bean=this.props.bean;

        return({comps:comps,data:data,bean:bean});
    },
    renderPage : function () {
        var pagination = null;
        if (this.props.pagination == true) {
            pagination = <Pagination pageCb={this.pageCb}
                                     perSize={this.state.pageInfo!==undefined&&this.state.pageInfo!==null?this.state.pageInfo.perSize:40}
                                     size={this.state.data!==undefined&&this.state.data!==null?this.state.data.length:0}/>;
        }
        return pagination;
    },
    componentWillReceiveProps:function(props)
    {
        //TODO:
        //this.setState(props);
    },
    render:function(){
        var data;
        //pagination本地配
        if(this.props.pagination==true)
        {
            data=this.goGetPageData(this.state.data);
        }
        else
            data=this.state.data;

        var clickReturn=this.clickReturn;

        return (
            <div className="row">
                <div className="col-sm-12 col-md-12" style={{paddingLeft:"0px",paddingRight:"0px",paddingTop:"30px"}}>
                    <Panel_selectCourse
                        data={this.state.comps}
                        bean={this.state.bean}
                        auto={true}
                        autoComplete={true}
                        query={this.props.query}
                        clickHandle={this.clickHandle}
                        clickReturn={clickReturn}  //点击返回
                        />
                    <OrdinaryTable_selectCourse
                        autoFetch={false}
                        data={data}
                        tail={this.state.tail}
                        filterField={this.props.filterField}
                        translation={this.state.translation}
                        />
                    {this.renderPage()}
                </div>
            </div>
        )
    }
});
export default PanelTable_selectCourse;