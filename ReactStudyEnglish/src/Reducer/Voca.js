import * as Types from '../Constant/ActionType';

var ArrayVoca = [];

const Voca = (state = ArrayVoca, action) => {
    let json;
    switch (action.type) {
        case Types.GETLISTVOCA:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            console.log(state);
            return state;
        case Types.GETLISTVOCA:
            json={
                code:'error',
                data:action.data
            }
            state = json;
            return state;
        default:
         return state;
    }
}
export default Voca;