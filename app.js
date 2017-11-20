'use strict';

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']; // TODO: see the pattern here, and what you need to fill in?

function Product(imgName, path) {
  // TODO: Build your constructor and necessary properties.
  this.imgName = imgName;
  this.path = path;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?

for(var i = 0; i < productNames.length; i++) {
  new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
}

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function(max) {
    // TODO: Hmm... what's going to happen here?
    return Math.round(Math.random() * (max - 0)) + 0;
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
    var imgs = document.getElementsByClassName('imgs');

    for(var i = 0; i < 3; i++) {
      imgs[i].src = allProducts[productRank.getRandomIndex(allProducts.length)].path;
    }
  },

  /*tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
  },*/
};

//productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();
