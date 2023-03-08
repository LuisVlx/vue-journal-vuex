
/* export const myGetter = ( state ) => {

    return state (Lo que se necesite del state)
    
} */

export const currentState = ( state ) => {

    return state.status
    
}

export const username = ( state ) => {

    return state.user?.name || ''
    
}
