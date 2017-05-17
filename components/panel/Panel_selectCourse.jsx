/**
 * Created by dell on 2016/8/29.
 */
import React from 'react';
import {render} from 'react-dom';
import Span from '../../components/basic/Span.jsx';
import Select from '../../components/basic/Select.jsx';
import Download from '../../components/basic/Download.jsx';
import Radio from '../../components/basic/Radio.jsx';
import '../../css/components/panel/panel.css';
import dict from '../../data/json/dictionary.json';
import Upload from '../basic/Upload.jsx';
import Calendar from '../basic/Calendar.jsx'
var ProxyQ=require('../proxy/ProxyQ');
var SyncStore=require('../flux/stores/SyncStore');
var SyncActions = require('../../components/flux/actions/SyncActions');


/**
 *
 * �������Ҫ���ݿ��ֵ�����Ϊ�������������,�ύ����Ϊ����·�ɹ��ܽ���jsp���
 * 1.ʵ��һ�������ļ��Ķ�ȡ�Լ�����ƥ��
 * 2.Ŀǰֻ֧��
 * 1).���ݱ��ػ�,һ��label���һ�����
 * 2).������ȡ,label|comp|data,�����ֶε�����ֻ���select���,input���
 * 3).input��������廯,��react��Ҫ�ر����ֵ�ĸı�
 * [
 * {row:[{'college|query'},{'stuType|select'},{'major|select'}]},
 * {row:[{'grade|input'},{'query'}]}
 * ]
 * 3.query����ɵ��ֶδ���
 * 4.
 * 5.��ʽ�����о���
 * 6.this.props.query�趨panel���ύ·��
 * 7.bean,ͨ����̨����������ʼ�����,ȫ�ֶξ����ɱ����ṩ
 * 8.������ļ���ˢ��,�ɸ������form���ύ������ݸ���
 * 9.panel��ʼ֧�ֶ�����Դ
 * 10.Radio�����д
 *
 *
 *
 *
 *
 * 11.Flux���������,sync...
 */

var Panel_selectCourse=React.createClass({
    returnCb:function(){
        if(this.props.clickReturn!==undefined&&this.props.clickReturn!==null)
        {
            this.props.clickReturn("cultivate");
        }
    },

    fetch:function(){
        var url=this.props.bean.url;
        var params=this.props.bean.params;
        console.log('url====' + url);
        ProxyQ.queryHandle(
            null,
            this.props.bean.url,
            this.props.bean.params,
            null,
            function(response){
                //������Ҫͳһ�淶��̨���ص����ݸ�ʽ
                var ob=null;
                if(response.data!==undefined&&response.data!==null&&response.data!="")
                {
                    if(ob==null)
                        ob=new Object();
                    ob.data=response.data;
                }
                else
                    console.log("type of response is wrong");
                if(response.query!==undefined&&response.query!==null)
                {
                    if(ob==null)
                        ob=new Object();
                    ob.query=response.query;
                }
                if(ob!==null)
                    this.setState(ob);

            }.bind(this)
        );

    },
    clickHandle:function(evt){
        evt.preventDefault();
        var target=evt.target;
        if(target!==undefined&&target!==null)
        {
            var data$query=$(target).attr("data-query");
            console.log("data-query===="+data$query);
            var l=document.getElementsByName('PanelForm').length;

            var params = new Object();
            //���ر�����������ֶ�
            var required = new Object();
            for(var m=0;m<l;m++){
                var form=document.getElementsByName('PanelForm')[m];
                for (var i = 0; i < form.getElementsByTagName("textarea").length; i++) {
                    var item = form.getElementsByTagName("textarea")[i];
                    params[item.name] = item.value;
                    if (item.getAttribute("data-required") == true || item.getAttribute("data-required") == "true") {
                        required[item.name] = item.name;
                    }
                }
                var flag=true;
                for (var i = 0; i < form.getElementsByTagName("input").length; i++)
                {
                    var item = form.getElementsByTagName("input")[i];

                    //��Ե�ѡ
                    if (item.type == 'radio') {
                        if (item.checked == true)
                            params[item.name] = item.value;

                    } else {
                        params[item.name] = item.value;
                    }
                    if (item.getAttribute("data-required") == true || item.getAttribute("data-required") == "true") {
                        required[item.name] = item.name;
                    }
                }
            }

            if(this.props.clickHandle!==undefined&&this.props.clickHandle!==null)
            {
                if (this.props.syncHandle !== undefined && this.props.syncHandle !== null) {
                    this.props.syncHandle({completed: true});
                }
                this.props.clickHandle(params);
            }
            else {//��������Ϊ������


                if($(target).attr('data-query')!==null&&$(target).attr('data-query')!==undefined)
                {
                    var params1=eval('('+$(target).attr('data-query')+')');
                    if(params1==null||params1==undefined){
                        params1=eval('('+$(target).parent().attr('data-query')+')');
                    }

                    ProxyQ.queryHandle(
                        null,
                        params1.url,
                        Object.assign(params1.params,params),
                        null,
                        function (response) {
                            if(response.finish!==null&&response.finish!==undefined&&response.finish==true) {
                                App.finish({label: response.label});
                            }
                        }.bind(this)
                    );

                }
                else
                {
                    if (this.state.query !== null && this.state.query !== undefined) {
                        for (var field in required) {
                            if (params[field] == undefined || params[field] == null||params[field]=='') {
                                alert("����������δ��д����");
                                return;
                            }
                        }
                        params = Object.assign(this.state.query.params, params);
                        if (this.props.syncHandle !== undefined && this.props.syncHandle !== null) {
                            this.props.syncHandle({completed: true});
                        }
                        console.log("query url ===="+this.state.query.url)
                        ProxyQ.queryHandle(
                            null,
                            this.state.query.url,
                            params,
                            null,
                            function (response) {
                                if(response.finish!==null&&response.finish!==undefined&&response.finish==true) {
                                    App.finish({label: response.label});
                                }
                            }.bind(this)
                        );

                    }

                }

            }

        }
    },
    selectHandle:function(target){
        if(target!==undefined&&target!==null)
        {
            var ob=target.getAttribute("data-query");
            if(ob!==undefined&&ob!==null)
            {
                //����ajax�������ύ
                ob=eval('('+ob+')');
                var form=document.getElementsByName('PanelForm')[0];
                var $form=$(form);
                var fields=new Object();
                $form.find("input[name!='']").map(function(i,item) {
                    fields[item.name]=item.value;
                });
                console.log();
                console.log();
                var params=Object.assign(ob.params,fields);
                ProxyQ.queryHandle(
                    null,
                    ob.url,
                    params,
                    null,
                    function(response){
                        //������Ҫͳһ�淶��̨���ص����ݸ�ʽ
                        var ob=null;
                        if(response.data!==undefined&&response.data!==null&&response.data!="")
                        {
                            if(ob==null)
                                ob=new Object();
                            ob.data=response.data;
                        }
                        else
                            console.log("type of response is wrong");
                        if(response.query!==undefined&&response.query!==null)
                        {
                            if(ob==null)
                                ob=new Object();
                            ob.query=response.query;
                        }
                        if(ob!==null)
                            this.setState(ob);

                    }.bind(this)
                );


            }
        }




    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return nextProps.data!==this.props.data||nextState.data!==this.state.data;

    },
    getInitialState:function(){

        //Ϊ������ͱ����ؼ���,����Ϊ��չ���ֶ����
        var reserved={
            "query":true,
            "input":true,
            "select":true,
            "span":true,
            "textarea":true,
            "radio":true,
            "return":true,
            "download": true,
            "upload"  : true,
            "calendar": true
        }

        var bean;
        if(this.props.bean!==undefined&&this.props.bean!==null)
            bean=this.props.bean;

        var data;
        if(this.props.data!==undefined&&this.props.data!==null)
            data=this.props.data;

        var query;
        if(this.props.query!==undefined&&this.props.query!==null)
            query=this.props.query;


        return ({reserved:reserved,bean:bean,shield:false,data:data,query:query});
    },
    render:function(){


        if(this.state.data!==undefined&&this.state.data!==null&&Object.prototype.toString.call(this.state.data)=='[object Array]')
        {

            //��ȡ֮ǰӦ������
            var _todos;
            if(this.props.syncHandle!==undefined&&this.props.syncHandle!==null)
            {
                _todos=SyncStore.getInContext(this.props.route);
            }


            //��������п�,ÿ�еĵ�Ԫ�������label�Ϳؼ����Է�һ��td
            var max$cols=1;
            this.state.data.map(function(item,i) {
                if(item.row!==undefined&&item.row!==null&&Object.prototype.toString.call(item.row)=='[object Array]')
                {
                    var cols=0;
                    item.row.map(function(comp,j) {
                        var col=comp.split("|");
                        if(col.length>1)
                            cols+=2;
                        else
                            cols+=1;
                    });
                    if(cols>max$cols)
                        max$cols=cols;
                }
            })


            var reserved=this.state.reserved;
            var trs=new Array();
            //�Զ�����td��ֵ����
            var autoComplete=this.props.autoComplete;

            var clickHandle=this.clickHandle;
            var state=this.state;
            var props=this.props;
            var returnCb=this.returnCb;
            var selectHandle=this.selectHandle;
            state.data.map(function(item,i) {
                var row=item.row;
                var tds=new Array();
                //һ���ַ�������,������3���ֶ�,label|comp|data
                var td$index=0;
                row.map(function(com,j) {
                    var coms=com.split("|");
                    var label;
                    var ctrl;
                    var ctrl$comp;
                    //��ѯ�ֵ�,ƥ��label�ֶ�
                    var name = null;
                    if (dict[coms[0]] !== undefined && dict[coms[0]] !== null)
                        name = dict[coms[0]].name;
                    if(state.bean!==undefined&&state.bean!==null)
                    {
                        var reg = /\<(.*?)\>/;
                        if (coms[0].indexOf('=>') !== -1 && coms[0].split('=>').length >= 2)
                        {
                            name = coms[0].split('=>')[1];
                        }
                        else {
                            name=coms[0];
                        }
                        if (reg.exec(name) !== null && reg.exec(name) !== undefined)
                            name = <span dangerouslySetInnerHTML={{__html:name}}></span>

                    }
                    if (name == null)
                    {
                        if (coms[0] !== undefined && coms[0] !== null) {
                            if (coms[0].indexOf('=>') != -1 && coms[0].split('=>').length >= 2)
                                name = coms[0].split('=>')[1];
                            else
                                name = coms[0];
                        }

                    }

                    if(name!==undefined&&name!==null)
                    {
                        if(coms.length>1) {
                            if (coms[1] !== null && coms[1] != undefined && coms[1] !== 'download') {
                                label = (<td key={td$index++} style={{textAlign:"right",width:"20%"}} colSpan={1}>
                                    {name}
                                </td>);
                            }
                        } else {//��Է���չ�ֶν�����ĩ��col����
                            var reg = /\<(.*?)\>/;
                            var re = reg.exec(name);
                            if (re !== null && re !== undefined && re[1] !== undefined && re[1] !== null) {
                                var customReg = /<(.*):['|"](.*)['|"]>(.*)<\/.*>/;
                                var customRe;
                                customRe = customReg.exec(name);
                                if (customRe !== undefined && customRe !== null && customRe.length >= 2) {
                                    switch (customRe[1]) {
                                        case 'align':
                                            label = (<td key={td$index++} style={{textAlign:customRe[2],border:"1px solid #0066b3"}}
                                                         colSpan={j==row.length-1?max$cols-j:1}>
                                                {customRe[3]}
                                            </td>);
                                            break;
                                        default:
                                            break;
                                    }
                                } else {
                                    label = (<td key={td$index++} colSpan={j==row.length-1?max$cols-j:1}
                                                 dangerouslySetInnerHTML={{__html:name}}>
                                    </td>);
                                }
                            }
                            else
                                label=(<td key={td$index++} style={{textAlign:"center",padding:"2px",border:"1px solid #0066b3"}} colSpan={j==row.length-1?max$cols-j:1}>
                                    {name}
                                </td>);
                        }

                        //label=(<span>{dict[coms[0]].name}</span>);
                    }else{//ƥ��comp�ֶ�
                        //Ĭ��query�ؼ�Ϊ���һ�������ֶ�,�ڴ˽���td���
                        if(coms[0]=='query')
                        {
                            ctrl=<button className="query" onClick={clickHandle}>��ѯ</button>
                            if(autoComplete==true)
                            {
                                tds.push(
                                    <td key={td$index++} style={{textAlign:"center",border:"1px solid #0066b3"}} colSpan={j==row.length-1?max$cols-j:1}>
                                        {ctrl}
                                    </td>);

                            }else{
                                tds.push(
                                    <td key={td$index++} style={{textAlign:"left",border:"1px solid #0066b3"}}>
                                        {ctrl}
                                    </td>);
                            }
                            return true;
                        }else
                            return false;
                    }


                    if(reserved[coms[1]]!==undefined&&reserved[coms[1]]!==null)
                    {
                        //�������е�ǰ�ܹ�֧�ֵ������֧
                        switch(coms[1])
                        {
                            case 'query':
                                if(state.bean!==null&&state.bean!==undefined) {
                                    if (Object.prototype.toString.call(coms[0].split("=>")) == '[object Array]' && coms[0].split("=>").length >= 2) {
                                        ctrl = <button type='submit' onClick={clickHandle} style={{width:"20%"}}>
                                            {coms[0].split("=>")[1]}</button>;
                                    }
                                    else {
                                        if(coms[2]!==undefined&&coms[2]!==null)
                                        {

                                            ctrl = <button name='queryButton' type='submit' onClick={clickHandle} style={{width:"90%"}}
                                                           data-query={coms[2]}> {coms[0]}</button>;

                                        }
                                        else
                                            ctrl = <button name='queryButton' type='submit' onClick={clickHandle} style={{width:"20%"}} > {coms[0]}</button>;

                                    }
                                }
                                else
                                    ctrl=<button type='submit' onClick={clickHandle} style={{width:"20%"}}>{dict[coms[0]].name}</button>;
                                //�����һ��Ϊquery���ʱ,ȡ��֮ǰ��label td
                                label=null;
                                break;
                            case 'input':
                                var ctrlName;
                                if (coms[0].indexOf('=>') !== -1 && coms[0].split('=>').length >= 2)
                                {
                                    ctrlName = coms[0].split('=>')[0];
                                }else{
                                    ctrlName=coms[0];
                                }
                                if(state.bean!==null&&state.bean!==undefined)
                                {
                                    if(coms[2]!==null&&coms[2]!==undefined)
                                    {
                                        var data=null;
                                        if(_todos!==undefined&&_todos!==null&&_todos[ctrlName]!==undefined&&_todos[ctrlName]!==null)
                                            data=_todos[ctrlName];
                                        console.log();
                                        console.log();
                                        console.log();
                                        console.log();
                                        try{
                                            var ob=eval('('+coms[2]+')');
                                            if(Object.prototype.toString.call(ob)=='[object Object]'){
                                                if(ob.remark!==undefined&&ob.remark!==undefined){
                                                    ctrl=<div>
                                                        <input type='text' name={ctrlName} data-required={ob.required} defaultValue={data!==undefined&&data!==null?data:ob.value}/>
                                                        <span>{ob.remark}</span>
                                                    </div>
                                                }
                                                else{
                                                    ctrl=<input type='text' name={ctrlName} data-required={ob.required} defaultValue={data!==undefined&&data!==null?data:ob.value}/>
                                                }
                                            }
                                            else if(Object.prototype.toString.call(ob)=='[object Array]'){
                                                var  ctrl1s=new Array;
                                                for(var i=0;i<ob.length; i++){
                                                    var  ctrl1=<div>
                                                        <span>{ob[i].label}</span>
                                                        <input type='text' name={ob[i].label} defaultValue={ob[i].value} data-required={ob[i].required}/>
                                                    </div>;

                                                    ctrl1s.push(<div key={i}>{ctrl1}</div>);

                                                }
                                                ctrl=ctrl1s;
                                            }
                                            else{
                                                if(Object.prototype.toString.call(ob)=='[object String]'||
                                                    Object.prototype.toString.call(ob)=='[object Number]'){

                                                    ctrl=<input type='text' name={ctrlName} defaultValue={coms[2]}/>;


                                                }
                                                else
                                                    ctrl= <input type="text" name={ctrlName} style={{textalign:"left"}}/>
                                            }
                                        }catch(e)
                                        {
                                            switch(coms[2])
                                            {
                                                case 'false':
                                                    ctrl=<input type='text' name={ctrlName}  disabled={true}/>
                                                    break;
                                                case 'true':
                                                    ctrl=<input type='text' name={ctrlName} defaultValue={data} style={{width:"100%"}}/>
                                                    break;
                                                case 'password':
                                                    ctrl=<div style={{textAlign:"left"}}>
                                                        <input type='password' name={ctrlName}  style={{width:"50%"}}/>
                                                    </div>
                                                    break;
                                                case 'passwordNew':
                                                    ctrl=<div style={{textAlign:"left"}} >
                                                        <input maxLength='20' type='password' name={ctrlName}  style={{width:"50%"}} />
                                                        <font color="red">*(���볤�� ��СΪ8λ�����Ϊ20λ)</font>
                                                    </div>
                                                    break;

                                                default:

                                                    ctrl=<input type='text' name={ctrlName} defaultValue={coms[2]}/>


                                                    break;
                                            }


                                        }

                                    }
                                }
                                else
                                    ctrl=<input type='text' name={ctrlName}/>;
                                break;
                            case 'select':
                                //select����ĵ�4���ֶ�:Ϊeval����
                                if(state.bean!==undefined&&state.bean!==null)
                                {

                                    if(coms[2]!==null&&coms[2]!==undefined)
                                    {
                                        try{
                                            var arr=eval(coms[2]);
                                            if(Object.prototype.toString.call(arr)=='[object Array]')
                                            {
                                                var command = null;
                                                if (coms[3] !== undefined && coms[3] !== null)
                                                    command = function (ob) {
                                                        eval(coms[3]);
                                                    }
                                                ctrl =
                                                    <Select auto={false} ctrlName={coms[0]} disabled={false} data={arr}
                                                            selectCb={command!==null&&command!==undefined?selectHandle:null}
                                                            data-query={coms[3]}/>
                                            }
                                            else{
                                                ctrl= <Select auto={true} ctrlName={coms[0]} disabled={true}/>
                                            }
                                        }catch(e){
                                            if(coms[2]=='true')
                                            {
                                                ctrl=<Select auto={false} ctrlName={coms[0]} />
                                            }else{
                                                ctrl=<Select auto={false} ctrlName={coms[0]} disabled={true}/>
                                            }
                                        }

                                    }
                                    else
                                        ctrl= <Select auto={true} ctrlName={coms[0]}/>
                                }
                                else
                                {
                                    var options=null;
                                    if(coms[2]!==undefined&&coms[2]!==null)
                                        options=eval(coms[2]);
                                    ctrl= <Select auto={true} ctrlName={coms[0]}
                                                  data={options}/>
                                }
                                break;
                            case 'download':

                                ctrl=<Download href={coms[2]} title={coms[0]} />
                                break;
                            case 'span':
                                var content = null;
                                if (coms[2] !== undefined && coms[2] !== null)
                                {
                                    var reg = /\<(.*?)\>/;
                                    var re = reg.exec(coms[2]);
                                    if (re !== null && re !== undefined)
                                    {
                                        var field= coms[0].split("=>")[0];
                                        if(props.scrolling==field)
                                            ctrl = <div style={{textAlign:"left",height:"200px",overflow:"scroll",overflowX:"hidden"}}
                                                        dangerouslySetInnerHTML={{__html:coms[2]}}>
                                            </div>
                                        else
                                            ctrl = <div style={{textAlign:"left"}}
                                                        dangerouslySetInnerHTML={{__html:coms[2]}}>
                                            </div>
                                    }
                                    else {
                                        ctrl=<Span auto={false} data={coms[2]}/>
                                    }
                                }else{
                                    ctrl = <Span auto={false}/>
                                }


                                break;
                            case 'textarea':
                                if(state.bean!==undefined&&state.bean!==null&&coms[2]!==null)
                                {
                                    ctrl = <textarea rows={4} name={coms[0]} style={{width:"100%",textAlign:"left"}}
                                                     defaultValue={coms[2]}></textarea>
                                }
                                else
                                    ctrl= <textarea rows={4}  name={coms[0]} style={{width:"100%",textAlign:"left"}}/>
                                break;
                            case 'calendar':
                                if (coms[2] !== undefined && coms[2] !== null)
                                {

                                    ctrl = <Calendar ctrlName={coms[0]} data={coms[2]}   />

                                }
                                break;
                            case 'upload':
                                ctrl = <Upload ctrlName={coms[0].split("=>")[0]}/>;
                                break;
                            case 'radio':
                                if(coms[2]!==undefined&&coms[2]!==null)
                                {
                                    if (coms[2].split("=>").length >= 2) {
                                        var ob;
                                        try {
                                            ob = eval(coms[2]);
                                        } catch (e) {
                                            ob = eval('(' + coms[2] + ')');
                                        }

                                        if (Object.prototype.toString.call(ob) == '[object Array]')
                                            ctrl = <Radio ctrlName={coms[0].split("=>")[0]} data={ob}
                                                />
                                        else
                                            ctrl = <Radio ctrlName={coms[0].split("=>")[0]} data={ob.data}
                                                          required={ob.required}/>
                                    }
                                    else{
                                        if(coms[3]!==undefined&&coms[3]!==null){

                                            ctrl =<div >
                                                <Radio  style={{display:"inline"}} ctrlName={coms[0]} data={coms[2]}/><font color="red">{coms[3]}</font>
                                            </div>
                                        }

                                        else{
                                            ctrl =<Radio ctrlName={coms[0]} data={coms[2]}/>
                                        }

                                    }

                                }else{
                                    ctrl=<Radio ctrlName={coms[0]}/>
                                }
                                break;
                            case 'return':

                                ctrl = <button  onClick={returnCb} style={{width:"20%"}} data-return={props.returnCb}>
                                    {coms[0]}</button>;


                                //�����һ��Ϊquery���ʱ,ȡ��֮ǰ��label td
                                label=null;
                                break;
                            default:
                                break;
                        }
                    }
                    if(ctrl!==undefined&&ctrl!==null)
                    {
                        if(coms[1]=='upload')
                        {
                            ctrl$comp= <td key={td$index++} style={{textAlign:"center",minWidth:"300px",border:"1px solid #0066b3"}} colSpan={j==row.length-1?max$cols-j:1} >
                                {ctrl}
                            </td>;
                        }
                        if(coms[1]=='input')
                        {
                            ctrl$comp= <td key={td$index++} style={{textAlign:"left"}} colSpan={j==row.length-1?max$cols-j:1} >
                                {ctrl}
                            </td>;
                        }
                        else{
                            ctrl$comp= <td key={td$index++} style={{textAlign:"center"}} colSpan={j==row.length-1?max$cols-j:1} >
                                {ctrl}
                            </td>;
                        }
                    }
                    if(autoComplete==true)
                    {
                        tds.push(label);
                        if(ctrl$comp!==undefined&&ctrl$comp!==null)
                            tds.push(ctrl$comp);
                        //tds.push(
                        //    <td key={j} style={{textAlign:"left"}} colSpan={j==row.length-1?max$cols-j:1}>
                        //        {label}
                        //        {ctrl}
                        //    </td>);

                    }else{
                        tds.push(
                            <td key={j}>
                                {label}
                                {ctrl}
                            </td>);
                    }


                });
                trs.push(<tr key={i}>{tds}</tr>);
            })


            var title;
            if(this.props.title!==undefined&&this.props.title!==null)
            {
                title= <th colSpan={max$cols}>{this.props.title}</th>


            }



            var highLight = this.props.highLight;
            var gradient = this.props.gradient;
            //not regulated css
            var padding = this.props.padding;
            var paddingLeft = this.props.paddingLeft;
            return(
                <form name="PanelForm" className={highLight==true?"form panel highLight":gradient==true?"form panel gradient":"form panel default"}
                      action={this.state.query!==undefined&&this.state.query!==null?+"/bsuims/"+this.state.query.url:""}
                      method="post"
                      style={{boxShadow:"none", padding:padding!==undefined&&padding!==null?padding:"2px",paddingLeft:paddingLeft!==null&&paddingLeft!==undefined?paddingLeft:"40px"}}>
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table table-bordered center panel" style={{border:"none"}}>

                                <thead>
                                {title}
                                </thead>
                                <tbody>
                                {trs}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form>);

        }else{

            if(this.props.auto==true)
                this.fetch();

            return(
                <div className={"row"}>
                    <div className="col-sm-12">
                        <table></table>
                    </div>
                </div>);
        }
    },
    componentWillUnmount:function(){//����ʧЧ
        if(this.props.syncHandle!==undefined&&this.props.syncHandle!==null)
        {
            //collect required fields
            var form=document.getElementsByName('PanelForm')[0];
            var required = new Object();
            for (var i = 0; i < form.getElementsByTagName("textarea").length; i++) {
                var item = form.getElementsByTagName("textarea")[i];
                if (item.getAttribute("data-required") == true || item.getAttribute("data-required") == "true") {
                    if(item.value!==undefined&&item.value!==null&&item.value!="")
                        required[item.name] = item.value;
                }
            }
            for (var i = 0; i < form.getElementsByTagName("input").length; i++) {
                var item = form.getElementsByTagName("input")[i];
                if (item.getAttribute("data-required") == true || item.getAttribute("data-required") == "true") {
                    if(item.value!==undefined&&item.value!==null&&item.value!="")
                        required[item.name] = item.value;
                }
            }

            if(required!==undefined&&required!==null)
            {
                this.props.syncHandle({completed:false,required:required});
            }
            else
                this.props.syncHandle({completed:true});
        }
    }
});
module.exports = Panel_selectCourse;