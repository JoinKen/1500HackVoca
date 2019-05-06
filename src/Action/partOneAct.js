
import callApi from "../CallAPI/callAPI";
import * as Types from "../Constant/ActionType";

export const getErr = (data) => {
    return {
        type: Types.GETERROR,
        data
    }
}
export const getListVoca = data => {
    return {
        type: Types.GETLISTVOCA,
        data
    }
}
export const getListContentStory = data => {
    return {
        type: Types.GETLIST_CONTENTSTORY,
        data
    }
}

export const getListContentStoryTextbox = data => {
    return {
        type: Types.GETLIST_CONTENTSTORYTEXTBOX,
        data
    }
}

export const getListVocaAct = () => {
    return (dispatch) => {
        return callApi("/JSONVocabulary", "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getErr(res.data))
            }
            else {
                dispatch(getListVoca(res.data))
            }
        })
    }
}
export const getListContentStoryAct = () => {
    return (dispatch) => {
        return callApi("/JSONContentstory", "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getErr(res.data))
            }
            else {
                dispatch(getListContentStory(res.data))
            }
        })
    }
}

export const getListContentStoryTextboxAct = () => {
    return (dispatch) => {
        return callApi("/JSONContentstoryTextbox", "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getErr(res.data))
            }
            else {
                dispatch(getListContentStoryTextbox(res.data))
            }
        })
    }
}


