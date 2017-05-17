/**
 * Created by outstudio on 16/5/6.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import Home from './modules/Home.jsx';
import MainSection from './modules/MainSection.jsx';

render((
    <Router history={browserHistory}>
        <Route path={window.App.getAppRoute()} component={App}>
            <IndexRoute component={Home}/>
            <Route path={window.App.getAppRoute()+"/changePassword.jsp"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/allCourseQuery"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/news"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/groupnews/grouptypenews_list.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_personBasicInfoUpdateInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_studentAllInfo.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_allRewPunInfo.do"} data={"?userType=TS"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/photomanage/showAllPhotoesForStu.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/register/register_information.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/healthyInfo/healthyInfo_medical_history_add_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/greenway/grad/student_grad_greenway_add_applyinfoInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/exemption/exemptionEnglishApplyInit.do"}data={"?inputType=1"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/healthyInfo/healthyInfo_examine_form_download.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/tutor/tutor_stu_apply_tutor_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/cultivatenew/newCultivate_SchemeShow.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/newCultivateAllCourseQueryPage"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/comminfoservice/link/systemGuideLinkInfoViewInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/cultivatenew/newCultivate_selectCourseShow.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/questionnaire/student_questionnaire_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/diminishMain"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/trafficplan/trafficPlanInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/register/dormitory_apply.do"} component={MainSection}/>
        </Route>
    </Router>
), document.getElementById('root'))

