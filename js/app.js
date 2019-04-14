var cat = function () {
  this.nicknames = ko.observableArray([{nn:'Cuty'},{nn:'The cat'},{nn:'Tabtab'},{nn:'Mr. fluf'}]);
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg');
  this.level = ko.computed(function(){
    if(this.clickCount()<=10){
      return 'Newborn';
    }
     else if(this.clickCount()>10 && this.clickCount()<20){
      return 'Infant';
    } else if(this.clickCount()>=20){
      return 'Teen';
    }
  }, this);


};

var appViewModel = function () {
  this.currentCat = ko.observable(new cat());
  this.clickIncrement = function () {
    this.clickCount(this.clickCount()+1);
  };

};
ko.applyBindings(new appViewModel());
