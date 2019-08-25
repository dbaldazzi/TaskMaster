export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model

    constructor(data) {
        console.log("list")
        this.name = data.name
        this._id = data.id
        this.items = data.items || []
    }

    getTemplate(index) {
        let template =
            `
        <div class="col-4 border">
            <h1>${this.name}</h1> 
            <ul>`
        template += this.drawItems(index)
        template += ` </ul>
                 <form onsubmit="app.controllers.listController.additem(event, ${index})">
            <div class="form-group">
                <label for="items">Items</label>
                <input type="text" class="form-control" name="Items" placeholder="list items">
                </div> 
                     <button type="submit">Add</button>
                </form> 
        <button type="button" class="bg-danger" onclick="app.controllers.listController.deleteList(${index})">Delete</button>
          </div > 
           `
        return template
    }
    drawItems(listindex) {
        let itemsTemplate = ""
        this.items.forEach((i, itemsIndex) => {
            itemsTemplate += `<li> ${i} < span onclick = "app.controllers.listController.deleteItems(${listindex}, 
        ${itemsIndex})">Delete</span><li>`
        });
        return itemsTemplate
    }
}
