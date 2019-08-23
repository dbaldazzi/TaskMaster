import List from "../models/List.js";

//Private
let _state = {
    lists: [new List({
        name: List,
        items: []
    })]
}



//Public
export default class ValueSService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?

    deleteItems(listindex, itemsindex) {
        _state.Lists[listindex].items.slize(itemsindex, 1)
    }

    deleteList(id) {
        _state.Lists.forEach((List, i) => {
            if (List._id = id) {
                _state.lists.splice(i, 1)
            }
        })
    }

    addList(newlist) {
        _state.lists.push(new List(newlist))

    }
    additems(newitem) {
        _state.item.push(new item(newitem))
    }

    constructor() {

    }



    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
