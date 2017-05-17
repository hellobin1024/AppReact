import React from 'react';



var LinkElement=React.createClass({
    clickCb:function(evt){
        if(evt!==undefined&&evt!==null)
        {
            var target=evt.target;
            var url;
            if(target.getAttribute('data-query')!==undefined&&target.getAttribute('data-query')!==null)
            {
                url = target.getAttribute('data-query') //要跳转的url
                var serverAddress = window.document.location.host; //得到服务器主机前缀
                var uri = "http://" + serverAddress + url;
                return (<div > {window.location.assign(uri)} </div>)
            }

        }
    },
    render:function(){
        var data$index;
        if(this.props["data-index"]!==null&&this.props["data-index"]!==undefined)
            data$index=this.props["data-index"];

        //link,上层组件传来的超链
        var link;
        if(this.props.to!==undefined&&this.props.to!==null)
            link=this.props.to;
        else
            link="javascript:void(0)";

        var alignStyle;
        if(this.props.align!==undefined&&this.props.align!==null)
            alignStyle={
                textAlign:this.props.align
            }


        var query;
        if(this.props["data-query"]!==undefined&&this.props["data-query"]!==null)
        {
            query=this.props["data-query"];
        }


        return (<a href={link}  className={this.props.linkClass} data-index={data$index}
                   onClick={this.clickCb} style={Object.assign({marginRight:"20px"},alignStyle)} data-query={query} data-comp={this.props["data-comp"]}>
            {this.props.children}</a>)
    }
});

export default LinkElement;