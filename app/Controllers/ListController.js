import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _draw() {
    let template = ''
    let Lists = _listService.lists
    Lists.forEach((lists, index) => {
        template += lists.getTemplate(index)
    })

    document.querySelector("#list-name").innerHTML = template
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
        let newItems = form.items.value
        _listService.addItems(newItems, listIndex)
        _draw()
    }
    deleteLists(index) {
        _listService.deleteList(index)
        _draw()
    }
    deleteItems(listIndex, itemsIndex) {
        _listService.deleteItems(ListService, itemsIndex)
        _draw()
    }
}