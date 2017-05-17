import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';

Boot()

function Boot()
{



    var data=[
        {checkM:'',name:'wjj'},
        {checkM:true,name:'danding'},
        {checkM:'',name:'tao'},
        {checkM:'',name:'hua'},
        {checkM:'',name:'fu'}
    ]

    render(
        <OrdinaryTable
            data={data}
            />
        , document.getElementById('root'))


}