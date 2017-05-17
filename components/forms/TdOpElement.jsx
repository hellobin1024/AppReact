import React from 'react';
import '../../css/components/forms/TdOpElement/TdOpElement.css';
import ContractElement from '../contract/ContractElement.jsx';


/**
 * TdOpElement,操作Td控件，你可以通过此控键订制执行表单操作时所需要满足的契约,请使用&lt;TdOpElement/&gt;进行组件的实例化
 * @author,danding001
 * @constructor TdOpElement
 * @example
 * //type:"add",图标替换为增加
 * //type:"delete",图标替换为删除
 * var op={
 *  type:"add",
 *  data:JSONArray
 * }
 * <TdOpElement op={op}/>
 *
 *  @see {@link http://www.w3school.com.cn/json/| learn more about JSONArray}
 */
var TdOpElement=React.createClass({
    checkHandle:function(){
        console.log('...');
        if(this.props.op.data!==undefined&&this.props.op.data!==null&&this.props.op.data.length>1)
        {
            this.setState({contractStatus:true});
        }
        else{
            this.props.opHandle(this.props.op.data);
        }
    },
    opHandle:function(ob){
        if(ob!==undefined&&ob!==null)
        {
            this.setState({contractStatus:false});
            this.props.opHandle(ob);
        }
        else
            this.setState({contractStatus:false});
    },
    getInitialState:function(){
        var op=null;
        if(this.props.op!==undefined&&this.props.op!==null)
            op=this.props.op;
        return {contractStatus:false,op:op};
    },
    componentWillReceiveProps:function(props) {
        var data;
        var op;
        if (props.op !== undefined && props.op !== null) {
            op = this.props.op;
            if (op.data !== undefined && op.data !== null) {
                data = op.data;
            }
        }
        this.setState({op: op, data: data});
    }
    ,
    render:function(){
        var op=this.state.op;
        if(op!==undefined&&op!==null&&op.trend!==undefined&&op.trend!==null)
        {
            var text;
            if(op.trend=="add")
                text="添加";
            else
                text="删除";
            //契约组件初始化
            var contract;
            if(op.data!==undefined&&op.data!==null)
                contract=<ContractElement contract={op.data} type={op.type} opHandle={this.opHandle}/>

            //显示增加或者删除图标
            if(this.state.contractStatus==false)
            {
                return (<td  rowSpan={1} colSpan={1}
                             width={this.props.width!==undefined&&this.props.width!==null?this.props.width:null}
                             className="microsoft-font" >
                    <button type="button" onClick={this.checkHandle}>{text}</button>
                </td>);
            }
            else{//显示Contract组件
                return (<td  rowSpan={1} colSpan={1}
                             width={this.props.width!==undefined&&this.props.width!==null?this.props.width:null}
                             className="microsoft-font" >
                    {contract}
                </td>);
            }

        }else{
           return( <td  rowSpan={1} colSpan={1}
                 width={this.props.width!==undefined&&this.props.width!==null?this.props.width:null}
                 onClick={this.opHandle} className="microsoft-font" >
                    </td>);

        }

    }

});

export default TdOpElement;