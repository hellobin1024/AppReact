/**
 * Created by outstudio on 16/5/13.
 */
module.exports = {
    path: 'calendar',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Calendar'))
        })
    }
}
