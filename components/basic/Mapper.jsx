import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../components/forms/OrdinaryTable.jsx';
import '../../css/components/basic/mapper.css';
import Select from './Select.jsx';
var ProxyQ=require('../proxy/ProxyQ');

var Mapper=React.createClass({
    plusCb:function(){
        //todo:get the selected field
        //var field 是选中的
        //this.state.fields[field]=true;
        var selected=this.refs.selectedFields.value;
        var fields=this.state.fields;
        if(fields==null||fields==undefined){
            fields={};
        }
        fields[selected]=true;
        this.setState({fields:fields});
    },
    minusCb:function(field){
        var fields=this.state.fields;
        fields[field]=false;
        this.setState({fields:fields});
    },
    queryCb:function() {
        var query={
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                reactActionName:"getOrdinaryTable",
                reactPageName:"processTableRulePage"
            }
        }
        if (this.state.table !== undefined && this.state.table !== null && this.state.fields !== undefined && this.state.fields !== null) {
            var fields=this.state.fields;
            var fieldd={fields:JSON.stringify(fields)}
            var params=Object.assign(query.params,this.state.table,fieldd);
            ProxyQ.queryHandle(
                null,
                query.url,
                params,
                null,
                function(response){
                    if(response.data!==undefined&&response.data!==null){
                       this.setState({ordinaryTableData:response.data})
                    }
                }.bind(this)
            )
        }
    },
    fetch:function() {
        var url = this.props.bean.url;
        var params = this.props.bean.params;
        ProxyQ.queryHandle(
            null,
            url,
            params,
            null,
            function (response) {
                //这里需要统一规范后台返回的数据格式
                var tables = new Object();
                if (response.data !== undefined && response.data !== null && response.data != "") {
                    tables = response.data;
                }
                else
                    console.log("type of response is wrong");
                if (tables !== null)
                    this.setState({tables:tables});
            }.bind(this)
        );
    },
    selectHandle:function(evt){
        var table={};
        table['tableName']=evt.target.value;
        this.state.table=table;

        var fields=null;
        var query={
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                    reactActionName:"getAllColumnNamesOfTable",
                    reactPageName:"processTableRulePage"
                   }
        };
        var params=Object.assign(query.params,table);
        ProxyQ.queryHandle(
            null,
            query.url,
            params,
            null,
            function(response){
                let allFields=[];
                if(response.data!==undefined){
                    allFields=response.data;
                }
                this.setState({allFields:allFields,fields:null});
            }.bind(this)
        );

    },



    getInitialState: function(){
        var tables=null;
        if(this.props.tables!==undefined&&this.props.tables!==null){
            tables=this.props.tables;
        }

        return {fields:null,tables:tables,table:null,allFields:null,ordinaryTableData:null}
    },

    _onAdd:function(data){
        let table=data.detail;
        let fields=this.state.fields;
        if(table!==undefined&&table!==null){
            var tableInfo={label:table};
            fields.push(tableInfo);
            this.setState({fields:fields});
        }

    },

    render: function() {
        var columns = new Array();
        var filterField = {};
        var tools = [];
        var dataTabs = [];
        let tables=null;
        let fieldsList=null;
        var ulContent=null;
        var state = this.state;
        var tabCb = this.tabCb;


        if (this.state.tables !== undefined && this.state.tables !== null) {
            var arr = this.state.tables;
            var options=[];
            arr.map(function(table,i){
                options.push(<option key={i} value={table.value}>{table.label}</option>)
            });
            tables = <select onChange={this.selectHandle}>{options}</select>;


            let option$fields=[];
             if (this.state.allFields !== undefined && this.state.allFields !== null) {
                 this.state.allFields.map(function (field, i) {
                     option$fields.push(<option value={field.value} key={i}>{field.label}</option>);
                 });
             }
            fieldsList = <select ref="selectedFields">{option$fields}</select>

            var liLists=[];

             if(this.state.fields!==undefined&&this.state.fields!==null){
                 var fields=this.state.fields;
                 var that=this;
                 var i=0;
                 for(var field in fields){

                     if(fields[field]==true)
                     liLists.push(<li key={i}>{field}<span className="fa fa-minus minus" onClick={that.minusCb.bind(that,field)}/></li>);
                    i++;
                 }
             }
            ulContent=<ul>{liLists}</ul>;

             return (
                   <div className="mapper">
                       <div className="header">
                           <div>
                               <div>
                                   <span>请选择表名</span>
                                  {tables}
                               </div>
                               <div >
                                   <span>请选择出表中的字段</span>
                                  {fieldsList}
                                  <span className="fa fa-plus" style={{marginLeft:"10px"}}onClick={this.plusCb}></span>
                               </div>
                           </div>
                           <div style={{display:"inline"}}>
                               {ulContent}
                               <div className="tools">
                                   <span className="fa fa-circle-o-notch" onClick={this.queryCb}></span>
                               </div>
                           </div>
                       </div>
                       <div style={{padding:"50px"}}>
                       <OrdinaryTable data={this.state.ordinaryTableData}  filterField={this.state.fields}/>
                           </div>
                   </div>
             );


        }
        else {
            this.fetch();
            return (<div></div>);
        }
    },
    componentDidMount:function(){
         var dom_node=$("#mapper_re_modal")[0];
         dom_node.addEventListener("_addTable",this._onAdd);
    }

});
module.exports=Mapper;