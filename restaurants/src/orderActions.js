export const ADD_ORDER = "ADD_ORDER"

export function addOrderAction(meal) {
    return {
        type: ADD_ORDER,
        payload: {
            order: {
                meal, 
                orderAt: Date.now()
            }
        }
    }
}