import * as Types from '../Constant/ActionType';

var ArrayContentStoryTextbox = [];

const ContentStoryTextbox = (state = ArrayContentStoryTextbox, action) => {
    let json;
    switch (action.type) {
        case Types.GETLIST_CONTENTSTORYTEXTBOX:
            json = {
                code: 'ok',
                data: action.data
            }
            state = json;
            return state;
        case Types.GETLIST_CONTENTSTORYTEXTBOX:
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
export default ContentStoryTextbox;