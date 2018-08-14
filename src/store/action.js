export const increaseAction =() =>({
    type:'increase'
})
export const getWidth = (data) =>({
    type:'bodywidth',
    data
})
export const totalAction = (data, name)=>({
    type:'total',
    data,
    name
})