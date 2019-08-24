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
                 <form onsubmit="app.Controllers.ListController.additem(event, ${index})">
            <div class="form-group">
                <label for="items">items</label>
                <input type="text" class="form-control" name="Items" placeholder="list items">
                </div> 
                     <button type="submit">+</button>
                </form> 
        <button type="button" onclick="app.controllers.listController.deleteList(${index})">X</button>
          </div > 
           `
        return template
    }
    drawItems(listindex) {
        let itemsTemplate = ""
        this.items.forEach((i, itemsIndex) => {
            itemsTemplate += `<li> ${i} < span onclick = "app.controllers.listController.delteItems(${listindex}, 
        ${itemsIndex})">X</span><li>`
        });
        return itemsTemplate
    }
}
