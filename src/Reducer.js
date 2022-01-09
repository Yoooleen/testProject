const defaultState ={
    inputValue:'Hearling',
    list:[]
}


export default (state = defaultState,action) => {
    switch(action.type){
        case 'change_input':
            let changeValue = JSON.parse(JSON.stringify(state))
            changeValue.inputValue = action.value
            return changeValue

        case 'add_item':
            let addItem = JSON.parse(JSON.stringify(state))
            addItem.list.push(addItem.inputValue)
            addItem.inputValue=''
            return addItem

        case 'delete_item':
            let deleteItem = JSON.parse(JSON.stringify(state))
            deleteItem.list.splice(action.index,1)
            deleteItem.inputValue=''
            return deleteItem
 
        default: return state
    }
}
