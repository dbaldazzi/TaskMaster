import ListService from "../Services/ListService.js";

//Private
let _listService = new ListService()

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ''
    let Lists = _listService.List

    Lists.forEach((lists, index) => {
        template += lists.template
    })

    let listnameElement = document.querySelector("#Items").innerHTML = template
}


//Public
export default class ListController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        _listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        _drawLists();
    }

    //TODO: Your app will need the ability to create, and delete both lists and listItems
    addList(event) {
        event.preventDefault()
        let form = event.target

        let newList = {
            name: form.name.value
        }
        ListService.addList(newList)
        _drawLists()

    }
}