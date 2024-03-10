import {
    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL,

    EVENT_DETAIL_REQUEST,
    EVENT_DETAIL_SUCCESS,
    EVENT_DETAIL_FAIL,

} from '../constants/eventConstants'

export const eventListReducer = (state = { event : []}, action ) => {
    switch (action.type){
        case EVENT_LIST_REQUEST:
            return { loading:true , event : []}
        
        case EVENT_LIST_SUCCESS:
            return { loading:false , event: action.payload.event, page : action.payload.page, pages:action.payload.pages  }

        case EVENT_LIST_FAIL:
            return { loading: false, error: action.payload , event : []} 
        
        default:
            return state

    }
}

export const eventDetailReducer = (state = {event : {} }, action)=>{
    switch(action.type){
        case EVENT_DETAIL_REQUEST:
            return {loading: true, ...state}

        case EVENT_DETAIL_SUCCESS:
            return {loading : false, event : action.payload }

        case EVENT_DETAIL_FAIL:
            return {loading: false, error : action.payload , event : []}
        
        default:
            return state
    }
}