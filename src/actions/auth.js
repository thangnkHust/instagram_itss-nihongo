import * as type from '../contants/auth'

export const setData = user => {
    return {
        type: type.SET_DATA,
        user
    }
}
