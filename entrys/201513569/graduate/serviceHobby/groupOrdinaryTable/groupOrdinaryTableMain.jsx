import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';


Boot();

function Boot()
{

    var data=[
        {no:1,sex:'m',stu:110},
        {no:1,sex:'f',stu:112},
        {no:3,sex:'m',stu:113},
        {no:1,sex:'m',stu:114},
        {no:3,sex:'f',stu:115},
        {no:2,sex:'f',stu:116},
        {no:2,sex:'f',stu:117}
    ];

    var group$field=['no','sex'];
    render(<OrdinaryTable
            title="申请助教奖学金"
            data={data}
            group-field={group$field}/>
    ,document.getElementById('root'));
}