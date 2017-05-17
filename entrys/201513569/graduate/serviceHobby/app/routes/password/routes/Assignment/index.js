/**
 * Created by outstudio on 16/6/3.
 */
module.exports = {
    path: 'assignment',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Assignment'))
        })
    }
}
