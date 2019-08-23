export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this._id = data.id,
            this.name = data.name

    }

    getTemplate(index) {
        let template = `
 <div class="col-r border">
 <h1>${this.name}</h1> 
 <ul>`
        template += this.drawitems(index)
            < form >
            <div class="form-group">
                <label for="Items">Items</label>
                <input type="list" class="form-control" id="items" aria-describedby="items" placeholder="items">
                    <small id="emailHelp" class="form-text text-muted">List items.</small>
  </div>
                `
                }
}