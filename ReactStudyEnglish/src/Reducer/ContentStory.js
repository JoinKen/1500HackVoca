import * as Types from '../Constant/ActionType';

var ArrayContentStory = [];

const ContentStory = (state = ArrayContentStory, action) => {
    let json;
    switch (action.type) {
        case Types.GETLIST_CONTENTSTORY:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            console.log(state);
            return state;
        case Types.GETLIST_CONTENTSTORY:
            json = {
                code: 'error',
                data: action.data
            }
            state = json;
            return state;
        default:
            return state;
    }
}
export default ContentStory;