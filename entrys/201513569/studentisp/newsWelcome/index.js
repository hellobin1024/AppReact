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
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path={window.App.getAppRoute()+"/allCourseQuery"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/greenChannelApply"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/trafficPlan"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/news"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/groupnews/grouptypenews_list.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_personBasicInfoUpdateInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_studentAllInfo.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/person/stuinfo_allRewPunInfo.do"} data={"?userType=TS"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/photomanage/showAllPhotoesForStu.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/exemption/exemptionEnglishApplyInit.do"} data={"?inputType=1"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/healthyInfo/healthyInfo_examine_form_download.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/tutor/tutor_stu_apply_tutor_init.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/cultivatenew/newCultivate_SchemeShow.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/allCourseQuery"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/newCultivateAllCourseQueryPage"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/comminfoservice/link/systemGuideLinkInfoViewInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/newCultivateAllCourseQueryPage"} component={MainSection}/>
            <Route path={window.App.getAppRoute+"/baseInfoManage/yxStudent_difficult_survey.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute+"/baseInfoManage/yxStuBaseInfoUpdateInit.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/freshmanNavigation/freshman_entranceGuidanceInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/baseInfoManage/yxStuBaseInfoUpdateInit.do"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/baseInfoManage/yxStudent_difficult_survey.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/baseInfoManage/register_fee_Init.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/tranningCloth/student_training_cloth.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/greenwaybks/student_greenway_add_applyinfoInit.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/healthyInfo/healthyInfo_medical_history_add_init.do"} data={"?flag=newStu"} component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/tutor/studentApplyTutorInit.do"}component={MainSection}/>
            <Route path={window.App.getAppRoute()+"/registration/registration_info.do"} data={"?type=1&flag=newStu"} component={MainSection}/>

        </Route>
    </Router>
), document.getElementById('root'))

