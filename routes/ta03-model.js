const items = [];

module.exports = class item {
    constructor(t,img,p,n,d) {
        this.tags = t;
        this.image = img;
        this.price = p;
        this.name = n;
        this.description = d;
    }

    save() {
        items.push(this);
    }

    static fetchAll() {
        return items;
    }

}