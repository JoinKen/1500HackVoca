
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
export const getListVocaAct = () => {
    return (dispatch) => {
        return callApi("JSONVocabulary", "GET").then(res => {
            console.log(res);
            console.log(res.data.length);
            if (res.data.length <= 0) {
                dispatch(getErr(res.data))
            }
            else {
                console.log("Co du lieu")
                dispatch(getListVoca(res.data))
            }
        })
    }
}

export const audioAct = (voca) => {
    console.log(voca);
    return (dispatch) => {
        return callApi("Audio", "POST", {
            voca
        }).then(res => {
            console.log(res);
            console.log("audio");
        })
    }
}
export const deleteVoca = (idVoca) => {
    console.log(idVoca);
    return (dispatch) => {
        return callApi("DeleteMyVocabulary", "POST", {
            idVoca
        }).then(res => {
            console.log(res);
            console.log("deletesucess");
        })
    }

}
export const inserVocaAct = (image, voca, spelling, idtypeword,
    meaning, example1, example2, idunit, idpart1, contentsoundsame, idusers) => {
    return (dispatch) => {
        console.log(contentsoundsame);
        console.log(idusers);
        return callApi("SaveMyVocabulary", "POST", {
            "image": image,
            "voca": voca,
            "spelling": spelling,
            "idtypeword": idtypeword,
            "meaning": meaning,
            "example1": example1,
            "example2": example2,
            "idunit": idunit,
            "idpart1": idpart1,
            "contentsoundsame": contentsoundsame,
            "idusers": idusers
        }
        ).then(res => {
            console.log("adas");
            console.log(res);
            // dispatch(getListVoca(res.data));
        })
    }
}