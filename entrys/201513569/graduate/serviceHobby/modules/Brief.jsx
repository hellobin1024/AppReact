import React from 'react';
import {render} from 'react-dom';
var ProxyQ=require('../../../../../components/proxy/ProxyQ.js');
var SyncStore = require('../../../../../components/flux/stores/SyncStore');
/**
 *
 * function fetch in Brief.jsx shoud fetch the data from the rule in background
 *
 */

    let constant='';

var Brief=React.createClass({
    fetch:function(){
        ProxyQ.queryHandle(
            null,
            "/bsuims/reactPageDataRequest.do",
            {
                reactActionName:'',
                reactPageName:''
            },
            null,
            function(response){
                var ob=new Object();
                if(response.arr!==null&&response.arr!==undefined)
                {
                    ob.data=response.arr;
                }
                ob.data.push(constant);
                this.setState(ob);
            }.bind(this)
        );
    },
    getInitialState:function(){
        var data=null;
        var data$initialed=false;
        if(this.props.data!==undefined&&this.props.data!==null)
        {
            data = this.props.data;
            data$initialed=true;
        }
        else
            data$initialed=false;

        return ({data: data});
    },
    render:function(){
        let data=null;
        if(this.state.data!==undefined&&this.state.data!==null)
        {
            let lis=new Array();
            if(Object.prototype.toString.call(this.state.data)=='[object Array]')
            {
                this.state.data.map(function(item,i) {
                    lis.push(<li key={i}>{item}</li>);
                });
            }
            if(lis.length>0)
            data=<ul>
                {lis}
                </ul>;
            return (
                <div className="briefInformation">
                    {data}
                </div>
            )
        }else{
            if(this.state.auto==true)
            {
                this.fetch();
                return <div className="briefInformation"></div>;
            }
        }
    }
});
module.exports=Brief;