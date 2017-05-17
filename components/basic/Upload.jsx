import React from 'react';
import {render} from 'react-dom';

/**
 * upload
 */
var Upload = React.createClass({
    clickCb          : function () {
        var $file = $(this.refs.file);
        $file.click();
    },
    getInitialState  : function () {
        return ({data: null});
    },
    render           : function () {
        if (this.props.ctrlName !== undefined && this.props.ctrlName !== null) {
            return (
                <div>
                    <input type="file" style={{display:"none"}} ref="file"/>
                    <input type="hidden" name={this.props.ctrlName} ref="ctrl"/>

                    <div className="input-append">
                        <input className="input" name="filename" type="text" ref="pathPreview"/>
                        <a className="btn" onClick={this.clickCb}>
                            <span style={{fontSize:"12px"}}>选择文件</span>
                        </a>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    },
    componentDidMount: function () {
        var file = this.refs.file;
        var $file = $(file);
        var $ctrl = $(this.refs.ctrl);
        var $pathPreview = $(this.refs.pathPreview);
        $file.change(function () {
            $pathPreview.val($(this).val());
            if (window.FileReader) {
                var source = file.files[0];
                var fr = new FileReader();
                fr.onloadend = function (e) {
                    $ctrl.val(e.target.result);
                };
                fr.readAsDataURL(source);
            }
        });

    }
});
module.exports = Upload;