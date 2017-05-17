import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';


var GreenChannelApply=React.createClass({


    render:function(){

        var bean={
            url:'serviceHall/bsuims/reactPageDataRequest.do',
            params: {
                reactActionName: "",
                reactPageName  : "gradGreenWayPage"
            }
        }

        var query={
            url:"",
            params:{
                reactActionName:"",
                reactPageName:""
            }
        }

        return(
            <Panel
                title="绿色通道申请"
                autoComplete={true}
                auto={true}
                bean={bean}
                query={query}
                />
        )


    }
});
export default GreenChannelApply;


