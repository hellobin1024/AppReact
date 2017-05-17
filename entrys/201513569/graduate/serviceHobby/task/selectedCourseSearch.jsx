import React from 'react';
import {render} from 'react-dom';
import classSchdule from './classSchdule.jsx';

Boot();

function Boot() {
    render(
        <classSchdule />
        , document.getElementById('root'))
}