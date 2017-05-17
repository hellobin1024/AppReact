import React from 'react';
import {render} from 'react-dom';
import '../../../../../../css/serviceHobby/basic/news.css';


var News = React.createClass({
    fetch            : function () {
        this.queryHandle(
            null,
            this.props.query.url,
            this.props.query.params,
            'json',
            function (response) {
                var data;
                var ob = new Object();
                if (Object.prototype.toString.call(response) != '[object Array]')
                    if (response.data !== undefined && response.data !== null)
                        if (Object.prototype.toString.call(response.data) == '[object Array]')
                            data = response.data;
                        else
                            data = response;
                ob.data$initialed = true;
                if (data !== undefined && data !== null)
                    ob.data = data;
                this.setState(ob);
            }.bind(this)
        )

    },
    queryHandle      : function (type, url, params, dataType, callback) {
        $.ajax({
            type    : type !== undefined && type !== null ? type : 'POST',
            url     : url,
            dataType: dataType !== undefined && dataType !== null ? dataType : 'json',
            data    : params,
            cache   : false,
            success : function (response) {
                if (callback !== undefined && callback !== null)
                    callback(response);
            },
            error   : function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        });


    },
    getInitialState  : function () {
        var data$initialed;

        var data;
        if (this.props.data !== undefined && this.props.data !== null) {
            data = this.props.data;
            data$initialed = true;
        }

        var auto;
        if (this.props.auto === true || this.props.auto === "true")
            auto = true;

        return ({data: data, data$initialed: data$initialed, auto: auto});
    },
    render           : function () {
        if (this.state.data$initialed !== true && (this.props.data == null || this.props.data == undefined)) {
            if (this.state.auto == true)
                this.fetch();
            return (<div></div>)

        } else {
            var news;
            if (this.state.data !== null && this.state.data !== undefined) {
                news = new Array();
                this.state.data.map(function (item, i) {
                    news.push(
                        <li key={i}>
                            <a href="javascript:void(0)" className="blue3" target="_blank" title={item.title}>
                                {item.title}
                            </a>
                            <span>
                                {item.date}
                            </span>
                        </li>);


                });
            }

            return (
                <div className="section clearfix News" ref="news" style={{display:"none"}}>
                    <div className="w_720 lfloat">
                        <ul className="list">
                            {news}
                        </ul>
                    </div>
                </div>
            );

        }
    },
    componentDidMount: function () {

        $(this.refs["news"]).slideDown(300);
    },

    componentWillUnmount: function () {
        $(this.refs["news"]).slideUp(300);

    }
});
module.exports = News;