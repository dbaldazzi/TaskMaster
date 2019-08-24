import List from "../Models/List.js";

//Private
let _state = {
    lists: []
}



//Public
export default class ListService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?

    deleteItems(listindex, itemsindex) {
        _state.Lists[listindex].items.splice(itemsindex, 1)
        this.saveLists()
    }

    deleteList(index) {
        _state.List.splice(index, 1)
        this.saveLists()
    }

    addItems(newItems, listindex) {
        _state.List[listindex].items.push(newItems)
        this.saveLists()
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        console.log(_state.List)
    }

    // constructor() {
    //     this.loadLists()
    // }

    get lists() {
        return _state.lists.map(list => new List(list))
    }

    loadLists() {
        let savedLists = JSON.parse(localStorage.getItem("lists"))
        if (savedLists) {
            _state.lists = savedLists
        }
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
console.log("service")