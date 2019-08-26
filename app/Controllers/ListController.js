import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _draw() {
    let template = ''
    let list = _listService.Lists
    console.log(list)
    list.forEach((list, index) => {
        template += list.getTemplate(index)
        console.log(list, index)
    })

    //connect template to html 
    document.querySelector("#list").innerHTML = template
}
console.log("controller")
//Public
export default class ListController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _draw();
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems

    //add lists and items 
    addList(event) {
        event.preventDefault()
        let form = event.target
        let newList = {
            name: form.name.value
        }
        _listService.addList(newList)
        _draw()
    }
    addItems(event, listIndex) {
        event.preventDefault()
        let form = event.target
        let newitems = form.items.value
        _listService.addItems(newitems, listIndex)
        _draw()
    }

    //delete lists and items
    deleteList(index) {
        //TODO if confirm, delete; else do nothing
        _listService.deleteList(index)
        if (window.confirm("are you sure you want to delete"))
            _draw()
    }
    deleteItems(listIndex, itemsIndex) {
        //TODO if confirm, delete; else do nothing

        _listService.deleteItems(listIndex, itemsIndex)
        if (window.confirm("are you sure you want to delete"))
            _draw()
    }

}