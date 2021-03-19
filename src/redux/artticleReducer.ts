import {articlesAPI} from "../API/API";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const SET_ARTICLES = "SET_ARTICLES";

export type ArticleType = {
    name: string
    year: number
    _id: number
}

const initialState = {
    articles: null as null | Array<ArticleType>
}

type InitialStateType = typeof initialState

const articleReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET_ARTICLES":
            return {
                ...state,
                articles: action.articles
            }
        default:
            return state;
    }
}

type ActionTypes = SetArticlesActionType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

type SetArticlesActionType = {
    type: typeof SET_ARTICLES
    articles: Array<ArticleType>
}

const setArticlesAction = (articles: Array<ArticleType>): SetArticlesActionType => ({type: SET_ARTICLES, articles});

export const getArticles = (): ThunkType => {
    return async (dispatch) => {
        const response = await articlesAPI.getArticles();
        if(response.status === 200 && response.data.success) {
            await dispatch(setArticlesAction(response.data.data));
        }
    }
}

export default articleReducer;