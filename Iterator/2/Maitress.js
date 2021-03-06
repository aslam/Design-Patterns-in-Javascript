var Maitress = function(oPancakeHouseMenu, oDinnerMenu){
	this.oPancakeHouseMenu = oPancakeHouseMenu;
	this.oDinnerMenu = oDinnerMenu;
};
Maitress.prototype._printMenu = function(oIterator){
	var oMenuItem = null;
	while(oIterator.hasNext()){
		oMenuItem = oIterator.next();
		console.log(oMenuItem.getName() + ": " + oMenuItem.getDescription() + ", " + oMenuItem.getPrice() + "eur.");
	}
};
Maitress.prototype.printMenu = function(){
	var oIteratorPancakeHouseMenu = this.oPancakeHouseMenu.createIterator();
	var oIteratorDinnerMenu = this.oDinnerMenu.createIterator();
	
	console.log("Breakfast");
	this._printMenu(oIteratorPancakeHouseMenu);
	console.log("Lunch");
	this._printMenu(oIteratorDinnerMenu);
};
Maitress.prototype.printBreakfastMenu = function(){
	var oIteratorPancakeHouseMenu = this.oPancakeHouseMenu.createIterator();
	this._printMenu(oIteratorPancakeHouseMenu);
};
Maitress.prototype.printLunchMenu = function(){
	var oIteratorDinnerMenu = this.oDinnerMenu.createIterator();
	this._printMenu(oIteratorDinnerMenu);
};
Maitress.prototype.isItemVegetarian = function(sName){
	var oIteratorPancakeHouseMenu = this.oPancakeHouseMenu.createIterator();
	var oIteratorDinnerMenu = this.oDinnerMenu.createIterator();
	var oMenuItem = null;
	
	while(oIteratorPancakeHouseMenu.hasNext()){
		oMenuItem = oIterator.next();
		if(oMenuItem.sName === sName){
			return oMenuItem.isVegetarian();
		}
	}
	while(oIteratorDinnerMenu.hasNext()){
		oMenuItem = oIterator.next();
		if(oMenuItem.sName === sName){
			return oMenuItem.isVegetarian();
		}
	}
	throw new Error("Sorry, but we don't have this in our menu!");
};