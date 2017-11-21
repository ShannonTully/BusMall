'use strict';

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'sweepers', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass']; // TODO: see the pattern here, and what you need to fill in?
var totalClicks = 0;

function Product(imgName, path) {
  // TODO: Build your constructor and necessary properties.
  this.imgName = imgName;
  this.path = path;
  this.timesClicked = 0;
  this.timesShown = 0;
  allProducts.push(this);
}

// TODO: Don't forget to build your objects. How can you do this withough having to write 14 lines of `new Product(., ., .)`?
(function() {
  for(var i in productNames) {
    new Product(productNames[i], 'img/' + productNames[i] + '.jpg');
  }
})();

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function(max) {
    // TODO: Hmm... what's going to happen here?
    return Math.floor(Math.random() * (max - 0)) + 0;
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
    var imgs = document.getElementsByClassName('imgs');
    var rand = [-1, -1, -1];

    while(rand[0] === rand[1] || rand[0] === rand[2] || rand[1] === rand[2]) {
      rand = [productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length), productRank.getRandomIndex(allProducts.length)];
    }

    for(var i = 0; i < 3; i++) {
      imgs[i].src = allProducts[rand[i]].path;
      allProducts[rand[i]].timesShown++;
    }

    return rand;
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
    allProducts[elementId].timesClicked++;

    totalClicks++;
    if(totalClicks === 25) {
      productRank.showButton();
    }
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
    // var footerEl = document.getElementsByTagName('footer');
    // var ulEl = document.createElement('ul');
    // footerEl[0].appendChild(ulEl);
    //
    // for(var i = 0; i < allProducts.length; i++) {
    //   var liEl = document.createElement('li');
    //   liEl.innerHTML = allProducts[i].imgName + ' has ' + allProducts[i].timesClicked + ' clicks.';
    //   ulEl.appendChild(liEl);
    // }

    var labels = [];
    var data = [];
    var bgColors = [];
    var bdColors = [];

    for(var i in allProducts) {
      labels.push(allProducts[i].imgName);
      data.push(allProducts[i].timesClicked);
      bgColors.push('rgba(' + productRank.getRandomIndex(255) + ',' + productRank.getRandomIndex(255) + ',' + productRank.getRandomIndex(255) + ', 1)');
      bdColors.push('rgba(' + productRank.getRandomIndex(255) + ',' + productRank.getRandomIndex(255) + ',' + productRank.getRandomIndex(255) + ', 1)');
    }

    var footEl = document.getElementsByTagName('footer');
    footEl[0].style.backgroundColor = 'white';

    productRank.createChart(labels, data, bgColors, bdColors);
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
    productRank.imagesEL.removeEventListener('click', productRank.onClick);
    var formEl = document.getElementsByClassName('form');
    var buttonEl = document.createElement('button');
    // buttonEl.type = 'button';
    // buttonEl.name = 'button';
    buttonEl.onClick = productRank.displayResults();
    buttonEl.innerHTML = 'Reset'; // this used to say results and was supposed to show the results but it refreshes the webpage for some reason so I am keeping it
    formEl[0].appendChild(buttonEl);
  },

  createChart: function(arrLabels, arrData, bgColors, bdColors) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var options = {
      type: 'bar',
      data: {
        labels: arrLabels,
        datasets: [{
          label: '# of Votes',
          data: arrData,
          backgroundColor: bgColors,
          borderColor: bdColors,
          borderWidth: 4,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    };
    var myChart = new Chart(ctx, options);
  },

  onClick: function(event) {
    // TODO: Hmm... what's going to happen here?
    console.log(event, event.target);
    if(event.target.id === '1') {
      productRank.tallyClicks(threeObjects[0]);
    } else if (event.target.id === '2') {
      productRank.tallyClicks(threeObjects[1]);
    } else if(event.target.id === '3'){
      productRank.tallyClicks(threeObjects[2]);
    } else return;
    threeObjects = productRank.displayImages();
  },
};

productRank.imagesEL = document.getElementById('pics');

productRank.imagesEL.addEventListener('click', productRank.onClick);
var threeObjects = productRank.displayImages();
