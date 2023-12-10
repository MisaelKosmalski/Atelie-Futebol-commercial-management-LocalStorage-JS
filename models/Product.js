class Product{

    constructor(name, brand, descript, buyPrice, price, quantity){
        this._id;
        this._name = name;
        this._brand = brand;
        this._descript = descript;
        this._buyPrice = buyPrice;
        this._price = price;
        this._quantity = quantity;

    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get brand(){
        return this._brand;
    }

    set brand(value){
        this._brand = brand;
    }

    get descript(){
        return this._descript;
    }

    set descript(value){
        this._descript = value;
    }

    get buyPrice(){
        return this._buyPrice;
    }

    set buyPrice(value){
        this._buyPrice = value;
    }

    get price(){
        return this._price;
    }

    set price(value){
        this._price = value;
    }

    get quantity(){
        return this._quantity;
    }

    set quantity(value){
        this._quantity = value;
    }

    loadFromJSON(json){

        for (let name in json){

            this[name] = json[name];

        }

    }

    static getProductsStorage(){

        let products = [];

        if (localStorage.getItem("products")){

            products = JSON.parse(localStorage.getItem("products"));

        }

        return products;

    }

    getNewId(){

        let productsId = parseInt(localStorage.getItem("productId"));

        if(!productsId > 0) productsId = 0;

        productsId++;

        localStorage.setItem("productId", productsId);

        return productsId;

    }

    save(){

        let products = Product.getProductsStorage();

        if(this.id) {

            products.map(p => {
                
                if(p._id == this.id){

                    Object.assign(p, this);

                }

                return p;

            });

        } else {

            this._id = this.getNewId();

            products.push(this);

        }

        localStorage.setItem("products", JSON.stringify(products));

    }

    remove(){

        let products = Product.getProductsStorage();

        products.forEach((productData, index) => {

            if(this._id == productData._id) {

                products.splice(index, 1);

            }

        });

        localStorage.setItem("products", JSON.stringify(products));
    }

}