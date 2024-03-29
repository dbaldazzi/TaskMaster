import List from "../Models/List.js";

//Private
let _state = {
    lists: [],

}




//Public
export default class ListService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?


    //delete items and lists 
    deleteItems(listIndex, itemsIndex) {
        _state.lists[listIndex].items.splice(itemsIndex, 1)
        this.saveLists()
    }

    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
    }

    //add items and lists 
    addItems(newItems, listIndex) {
        _state.lists[listIndex].items.push(newItems)
        this.saveLists()
        console.log(_state.items)
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
        console.log(_state.items)
    }

    // constructor() {
    //     this.loadLists()
    // }

    //local storage for load on page load and reload 
    get Lists() {
        // TODO CHECK spelling to ensure it's referring to the correct thing
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