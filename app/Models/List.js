export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model

    constructor(data) {
        console.log("list")
        this.name = data.name
        this._id = data.id
        this.items = data.items || []
        this.lists = data.lists
    }


    //list template 
    getTemplate(index) {
        let template =
            `
        <div class="col-4 border">
            <h1>${this.name}</h1> 
            <ul>`
        template += this.drawItems(index)
        template += ` </ul>
        <form onsubmit="app.controllers.listController.addItems(event, ${index})">
        <div class="form-group">
        <label for="items">Items List</label>
        <input type="list" class="form-control" name="items" placeholder="list items">
        </div> 
        <button type="submit">Add</button>
        <h5>${this.items}</h5>
        </form>
        <button type="button" class="bg-danger" onclick="app.controller.listController.deleteList(${index})">Delete</button>
        </div >`
        return template
    }
    drawItems(listIndex) {
        let itemsTemplate = " "
        this.items.forEach((items, itemsIndex) => {
            itemsTemplate += `<li> ${items} <span onclick="app.controllers.listController.deleteItems(${listIndex}, 
        ${itemsIndex})">Delete</span></li>`
        });
        return itemsTemplate
    }
}

