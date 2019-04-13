var appViewModel = function () {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('https://www.sonomamag.com/wp-content/uploads/2018/05/shutterstock_352176329.jpg');
  this.clickIncrement = function () {
    this.clickCount(this.clickCount()+1);
  };
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
ko.applyBindings(new appViewModel());