/**
 * Created by outstudio on 16/6/3.
 */
module.exports = {
    path: 'modify',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null,require('./components/Modify'))
        })
    }
}
