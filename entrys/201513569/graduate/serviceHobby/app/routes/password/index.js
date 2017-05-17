/**
 * Created by outstudio on 16/6/2.
 */

module.exports = {
    path: 'password',
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/PasswordModify'),
                require('./routes/Assignment')
            ])
        })
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Password'))
        })
    }
}
