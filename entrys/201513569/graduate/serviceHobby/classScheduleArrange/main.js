import React from 'react';
import {render} from 'react-dom';
import ClassSchedule from './ClassSchedule.jsx';

Boot();

function Boot() {

    render(
        <div>
            <ClassSchedule />
        </div>
        , document.getElementById('root'));
}