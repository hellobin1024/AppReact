import React from 'react';
import {render} from 'react-dom';
import Calendar from '../../../../../components/basic/Calendar.jsx';
Boot();

function Boot(){

    render(
        <Calendar ctrlName="zip"/>
        , document.getElementById('root'))
}