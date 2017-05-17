/**
 * Created by outstudio on 16/6/2.
 */

var register={
    path: 'register',
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/gradwayApply')
            ])
        })
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Register'))
        })
    }
}

module.exports =register;