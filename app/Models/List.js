export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this._id = data.id,
            this.name = data.name,
            this.items = data.items
    }

    getTemplate(index) {
        let template = `
 <div class="col-r border">
 <h1>${this.name}</h1> 
 <ul>`
        template += this.drawItems(index)
        template += `</ul>
                 <form onsubmit="app.Controllers.ListController.additem(event,${index})">
            <div class="form-group">
                <label for="Items">Items</label>
                <input type="text" class="form-control" id="items" placeholder="items">
                </div> 
                     <button type="submit">+</button>
                </form> 
        <button type="button" onclick="app.Controllers.ListController.deleteItems(${index})">X</button>
          </div > 
           `
        return template
    }
    drawItems(itemsIndex) {
        let itemsTemplate = ""
        this.items.forEach((items, itemsIndex) => {
            itemsTemplate += `<li> ${itemsIndex} < span onclick = "app.Controllers.ListController.delteItems(${itemsIndex} 
        ${itemsIndex})">X</span><li>`
        });


        return itemsTemplate
    }
}
