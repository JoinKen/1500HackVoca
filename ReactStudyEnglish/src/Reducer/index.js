import Vocas from '../Reducer/Voca';
import ContentStorys from '../Reducer/ContentStory';
import ContentStoryTextboxs from '../Reducer/ContentStoryTextBox';
import { combineReducers } from "redux";

const appReducers = combineReducers({
    Vocas,
    ContentStorys,
    ContentStoryTextboxs
})
export default appReducers