import React from 'react';
import {render} from 'react-dom';

import RoomLink from './RoomLink';
import TermLink from './TermLink.jsx';
import CollegeLink from './CollegeLink.jsx';
import Select from './Select.jsx';

var NavbarItem=React.createClass({

    queryClick:function() {
        if(this.props.queryFunc!==undefined && this.props.queryFunc!==null){
            this.props.queryFunc();
        }
    },

    render: function() {

        var navStyle= {
            marginLeft:"10%",
            fontFamily: "Microsoft YaHei, SimHe"
        };

        //{/*学期*/}
        //console.log("termInfo====\r\n" + this.props.termInfo);
        var termFunc=this.props.selectTerm;
        //if(this.props.termInfo!=null)
        //{
        //    var Termlinkdowns = this.props.termInfo.map(function (term, index) {
        //        return (
        //            <TermLink key={index} term={term} termName={term.name}
        //                      queryFunc={termFunc}/>
        //        );
        //    });
        //}
        var termCtrl=<Select ctrlName={'学期: '} data={this.props.termInfo} width={'180px'} queryFunc={termFunc}/>


        //{/*一级学院*/}
        //console.log("collegeInfo====\r\n" + this.props.collegeInfo);
        var collegeFunc=this.props.selectCollege;
        //if(this.props.collegeInfo!=null)
        //{
        //    var Collegelinkdowns = this.props.collegeInfo.map(function (college, index) {
        //        return (
        //            <CollegeLink key={index} college={college} collegeName={college.name}
        //                      queryFunc={collegeFunc}/>
        //        );
        //    });
        //}

        var collegeCtrl=<Select ctrlName={'一级学院: '} data={this.props.collegeInfo} width={'195px'} queryFunc={collegeFunc}/>

        //{/*二级学院*/}
        //console.log("collegeInfo_1====\r\n" + this.props.collegeInfo_1);
        var collegeFunc_1=this.props.selectCollege1;
        //if(this.props.collegeInfo_1!=null)
        //{
        //    var Collegelinkdowns_1 = this.props.collegeInfo_1.map(function (college1, index) {
        //        return (
        //            <CollegeLink key={index} college1={college1} college1Name={college1.name}
        //                      queryFunc={collegeFunc_1}/>
        //        );
        //    });
        //}

        var collegeCtrl_1=<Select ctrlName={'二级学院: '} data={this.props.collegeInfo_1} width={'180px'} queryFunc={collegeFunc_1}/>


        //{/*教室*/}
        //console.log("roomInfo====\r\n" + this.props.roomInfo);
        var roomFunc=this.props.selectRoom;
        //if(this.props.roomInfo!=null) {
        //    var Roomlinkdowns = this.props.roomInfo.map(function (room, index) {
        //        return (
        //            <RoomLink key={index} room={room} roomName={room.name}
        //                      queryFunc={roomFunc}/>
        //        );
        //    });
        //}

        var roomCtrl=<Select ctrlName={'教室: '} data={this.props.roomInfo} width={'160px'} queryFunc={roomFunc}/>

        return (
            <div style={{marginBottom:'15px'}}>
                <table cellSpacing="0" width="100%"
                       style={{fontSize:'13px', lineHeight:'24px', borderCollapse:'collapse'}}>
                    <tbody>
                        <tr height="20">
                            <td>
                                {termCtrl}
                                {collegeCtrl}
                                {collegeCtrl_1}
                                {roomCtrl}
                                <button type="button" onClick={this.queryClick}
                                        style={{marginLeft:'30px', width:'44px',height:'23px'}}>查询</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
});
module.exports=NavbarItem;