/**
 * Created by outstudio on 16/5/13.
 */

import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';


var App=React.createClass({
    render:function(){
        console.log();
        console.log();
        console.log();
     return(
         <div>
            <Nav/>
             {this.props.children}
         </div>
     )
    }
});
module.exports=App;