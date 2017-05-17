import React from 'react';
import {render} from 'react-dom';

var Select=React.createClass({
    selectCb:function(evt){
        var target=evt.target;
        var hidden=this.refs.hidden_field;
        hidden.value=target.value;
        if(this.props.queryFunc!==null&&this.props.queryFunc!==undefined)
        {
            this.props.queryFunc(target.value);
        }
    },

    getInitialState:function(){
        var data = null;
        if(this.props.data!==undefined&&this.props.data!==null) {
            data=this.props.data;
        }
       return({data:data});
    },

    componentWillReceiveProps(props){
        var data=new Object();
        if(props.data!==undefined&&props.data!==null) {
            data=props.data;
        }
        this.setState({data:data});
    },
    render:function(){
        if(this.state.data!==undefined && this.state.data!==null) {

            var data = this.state.data;
            var options=new Array();
            var selectCb=this.selectCb;
            var selected = null;

            data.map(function(item,i) {
                 if(item["selected"]!==undefined&&item["selected"]!==null) {
                    options.push(<option value={item.value} key={i} selected>{item.label}</option>);
                    if(item.value!==undefined&&item.value!==null){
                        selected=item.value;
                    }
                }
                else{
                     options.push(<option value={item.value} key={i}>{item.name}</option>);
                 }

            });
            return(
                <div style={{display:'inline',marginLeft:'20px'}}>
                    {this.props.ctrlName}
                    <input name={this.props.ctrlName} style={{display:"none"}} defaultValue={selected!==null&&selected!==undefined?selected:this.state.data[0].value} ref="hidden_field"/>
                    <select onChange={selectCb} style={{width:this.props.width}}>
                        {options}
                    </select>
                </div>
            );
        }
        else{
            return(<select ></select>);
        }
    }
});
export default Select;
