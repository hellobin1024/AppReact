import React from 'react';
import {render} from 'react-dom';
import List from '../../../../../components/basic/List.jsx';


Boot();


function Boot() {


    var data = [
        {route: "/password/modify", "label": "this is danding test"},
        {route: "/allCourseQuery", "label": "this is the business for student to query "},
    ]
    render(
        <List data={data}></List>
        , document.getElementById('root'));
}