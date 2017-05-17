import React from 'react';
import {render} from 'react-dom';
var ReactHighcharts = require('react-highcharts');
var ProxyQ = require('../proxy/ProxyQ');

/**
 * 1.query属性的params键必填
 * 2.data数据结构 var data = {
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        }]
    };
 *
 *
 * */

var HighChart=React.createClass({
    fetch:function(){

        ProxyQ.queryHandle(
            null,
            this.props.query.url,
            this.props.query.params,
            null,
            function(response)
            {
                let data=null;
                if(response.data!==undefined&&response.data!==null)
                    data=response.data;
                this.setState({data: data});
            }.bind(this)
        );

    },
    getInitialState:function(){
        let data=null;
        if(this.props.data!==undefined&&this.props.data!==null)
            data=this.props.data;
        let auto=null;
        if(this.props.auto!==undefined&&this.props.auto!==null)
            auto=this.props.auto;
        else
            auto=false;
        return({data: data,auto:auto});
    },
    render:function(){
        if(this.state.data==undefined||this.state.data==null)
        {
            if(this.state.auto==true)
                this.fetch();
            return(<div className="HighChart"></div>);
        }
        else{
            return(
                <div className="HighChart">
                    <ReactHighcharts config={this.state.data}/>
                </div>);
        }
    },
    componentDidUpdate:function(){

    }
});
module.exports=HighChart;