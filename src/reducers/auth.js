import { SET_DATA } from '../contants/auth'

const initialstate = {
    user: {
        email: '',
        nickname: '',
        avatar: '',
        description: '',
        sex: ''
    },
    isLogin: false,
}

export function auth(state = initialstate, action) {
    switch (action.type){
        case SET_DATA:
            return {
                user: action.user,
                isLogin: true,
            }
        default:
            return state
    }
}
