// #!/usr/bin/env node

'use strict';

const { filter } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./camron-caldwell.github.io1/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let maleCustomers = array.filter(function(customer){
        return customer.gender === 'male';
    })
     return maleCustomers.length;
};

var femaleCount = function(array) {
   let femaleCustomers = array.reduce(function(acc, customer){
        if(customer.gender === 'female'){
            return acc + 1; 
        }
        return acc;
   }, 0)
   return femaleCustomers;
};

var oldestCustomer = function(array){
    let oldest = array.reduce(function(oldestCustomer, current){
        if(current.age > oldestCustomer.age){
            oldestCustomer = current;
        } else {
            oldestCustomer = oldestCustomer
        }
        return oldestCustomer
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = array.reduce(function(youngestCustomer, current){
        if(current.age < youngestCustomer.age){
            youngestCustomer = current;
        } else {
            youngestCustomer = youngestCustomer
        }
        return youngestCustomer
    })
    return youngest.name;
};

var averageBalance = function(array) {
    var totalBalance = array.reduce(function(sum, customer) {
        var balanceNumeric = parseFloat(customer.balance.replace(/[^\d.-]/g, ''));
        return sum + balanceNumeric;
    }, 0);
    var average = totalBalance / array.length;
    return average;
};;

var firstLetterCount = function(array, letter) {
    var customersWithLetter = array.filter(function(customer) {
        return customer.name.toUpperCase().startsWith(letter.toUpperCase());
    });
    return customersWithLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    const targetCustomer = array.find(customerInfo => customerInfo.name === customer);
    if (targetCustomer) {
        letter = letter.toLowerCase();
        let count = targetCustomer.friends.filter(friend => friend.name.charAt(0).toLowerCase() === letter).length;
    return count;
    }
  return 0;
};

var friendsCount = function(array, name) {
    let friendNames = array.filter(customer => customer.friends.some(friend => friend.name === name)).map(customer => customer.name);
    return friendNames;
};

var topThreeTags = function(array) {
    let tagCounts = {};
    array.forEach(customer => {
        customer.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    let sortedTags = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a]);
  return sortedTags.slice(0, 3);
};

var genderCount = function(array) {
    let count = {
        male: 0,
        female: 0,
        "non-binary": 0
      };
    
      array.forEach(customer => {
        if (customer.gender === 'male') {
          count.male++;
        } else if (customer.gender === 'female') {
          count.female++;
        } else {
          count["non-binary"]++;
        }
      });
    
      return count;
};;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
