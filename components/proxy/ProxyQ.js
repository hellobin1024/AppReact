import config from '../../config.json';

var ProxyQ = {
    getProxyServer:function(){
        if (config.devServer !== undefined && config.devServer !== null)
        {
            if (config.devServer.proxy !== undefined && config.devServer.proxy !== null) {
                //只添加第一个proxy的值
                var proxyServer
                for (var field in config.devServer.proxy) {
                    var re = /\/(.*?)\//;
                    proxyServer= re.exec(field)[1];
                    break;
                }
                return proxyServer;
            }
        }
    },
    keyInArray: function (val, key, arr) {
        var index = -1;
        arr.map(function (item, i) {
            if (item[key] == val) {
                index = i;
            }

        });
        if (index !== -1) {
            return index;
        }
        else {
            return false;
        }
    },
    load: function (modalName) {
        var component = null;
        switch (modalName) {
            case "EmbedTable":
                component = require('../../components/forms/EmbedTable.jsx');
                break;
            case "PanelTable":
                component = require("../../components/compounds/panelTable/PanelTable.jsx");
                break;
            case "Panel":
                component = require("../../components/panel/Panel.jsx");
                break;
            case "OrdinaryTable":
                component = require("../../components/forms/OrdinaryTable.jsx");
                break;
            default:
                break;
        }
        return component;

    },
    getPrefix:function(){
        if(App.getModel()=="debug")
        {
            return "/"+this.getProxyServer();
        }
        else
            return "";

    },
    es6Props: function (fields, ob) {
        var filter = new Object();
        var other = new Object();
        fields.map(function (field, i) {
            if (ob[field] !== undefined && ob[field] !== null)
                filter[field] = ob[field];
            else
                other[field] = ob[field];
        });
        return ({filter: filter, other: other});

    },
    queryHandle: function (type, url, params, dataType, callback) {
        var proxyUrl = url;
        if(App.getModel()=="debug")
        {
            proxyUrl = "/"+this.getProxyServer() + proxyUrl;
        }
        if (App.getLoadModel() == "true") {
            App.load();
        }
        $.ajax({
            type    : type !== undefined && type !== null ? type : 'POST',
            url     : proxyUrl,
            dataType: dataType !== undefined && dataType !== null ? dataType : 'json',
            data    : params,
            cache   : false,
            success : function (response) {
                //取消加载遮罩
                if (App.getLoadModel() == "true") {
                    App.unload();
                }
                var $modal=$("#root_modal");
                var content;
                var errType="";
                var catched=false;
                if((response.re!==undefined&&response.re!==null)&&(response.re==1||response.re=="1"||response.re==-1||response.re=="-1"||response.re==2||response.re=="2"))
                {  if(response.content!==undefined&&response.content!==null&&response.content!="") {
                    catched = true;
                    content = response.content;
                }
                }else{
                    console.log('...');
                    if ((response.arr == undefined || response.arr == null)
                        && (response.array==undefined||response.array==null)
                        &&(response.data == undefined || response.data == null))
                    {
                        content="警告:   数据为空";
                        catched=true;
                    }
                    else{
                        if(Object.prototype.toString.call(response.data)=='[object Array]'&&response.data.length<1)
                        {
                            content = "警告:   数据为空";
                            catched=true;
                        }
                    }
                }
                if(catched==true)
                {   if(response.re==2||response.re=="2"){
                    $modal.find(".modal-body").html(content);
                    }else {
                    $modal.find(".modal-body").text(content);
                    }
                    $modal.find(".modal-title").text(errType);
                    $modal.modal("show");

                }

                if (callback !== undefined && callback !== null)
                    callback(response);
            },
            error   : function (xhr, status, err) {
                if (App.getLoadModel() == "true") {
                    App.unload();
                }
                alert(err + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
                console.error("error=" + err);
                var $modal=$("#root_modal");
                var content;
                var errType;
                if(xhr.status==404||xhr.status=="404")
                {
                    content="错误描述:        "+xhr.responseText;
                    errType="";
                    switch(xhr.statusText)
                    {
                        case "Not Found":
                            errType="发生错误:"+"path not found";
                            break;
                        default:
                            break;
                    }
                }
                else if (xhr.status == 502 || xhr.status == "502") {
                    content = "错误描述:        " + xhr.responseText;
                    errType = "发生错误:" + "无效的服务器指向";

                }
                else {

                }
                $modal.find(".modal-body").text(content);
                $modal.find(".modal-title").text(errType);
                $modal.modal('show');
            }
        });

    }


};


module.exports = ProxyQ;