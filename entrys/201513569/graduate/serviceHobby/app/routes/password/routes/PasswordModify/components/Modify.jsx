import React from 'react';
import {render} from 'react-dom';
import PasswordModify from './PasswordModify.jsx';
import './modify.css';
var TodoStore = require('../../../../../../../../../../components/flux/stores/TodoStore');


var Modify=React.createClass({
    _onChange        : function () {
        var stores = TodoStore.getAll();
        for (var id in stores) {
            console.log("id=" + stores[id].id);
            console.log("text=" + stores[id].text);
            console.log();
        }
    },
    render           : function () {
        var path = this.props.route.path;
        var ctrl;
        var breadcrumb;
        if (path !== undefined && path !== null) {

            ctrl = <PasswordModify/>

            var paths = path.split("/");
            var spans = new Array();
            if (paths[0] == "" && paths[1] == "") {
                spans.push(<span className="separator" key={0}>/</span>);
            } else {
                var k = 0;
                paths.map(function (item, i) {
                    if (i == 0)
                    {
                        spans.push(<span className="separator" key={k++}></span>);
                        if(i==paths.length-1)
                        {
                            spans.push(<span className="path-segment" key={k++}>{item}</span>);
                        }
                    }
                    else {
                        spans.push(<span className="path-segment" key={k++}>{item}</span>);
                        if (i !== paths.length - 1)
                            spans.push(<span className="separator" key={k++}>/</span>);
                    }

                });
            }
            breadcrumb =
                <div className="breadcrumb">
                    {spans}
                </div>
        }
        return (
            <div style={{margin: "300px auto 60px auto",width:"100%"}}>
                {breadcrumb}
                <div ref="controller" style={{display:"none"}}>
                    {ctrl}
                </div>
            </div>
        );


    },
    componentDidMount: function () {
        //TodoStore.addChangeListener(this._onChange);
        $(this.refs["controller"]).slideDown(300);
    },

    componentWillUnmount: function () {
        $(this.refs["controller"]).slideUp(300);
        //TodoStore.removeChangeListener(this._onChange);
    }
});
module.exports=Modify;