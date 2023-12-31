//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var allValues = Object.values(object);

    var stringValues = allValues.filter(function(value) {
        return typeof value === 'string';
    });

    return stringValues.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    } else if (typeof collection === 'object' && collection !== null) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var dissectedString = string.split('');
    if(dissectedString.length > 0) {
        return dissectedString[0].toUpperCase() + dissectedString.slice(1).join('');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var dissectedString = string.split(' ');
    var almost = [];

    for (var i = 0; i < dissectedString.length; i++) {
        var capWords = dissectedString[i].charAt(0).toUpperCase() + dissectedString[i].slice(1);
        almost.push(capWords);
    }

    var final = almost.join(' ');
    return final;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (object.noises && object.noises.length > 0) {
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    string = string.toUpperCase(); 
    word = word.toUpperCase(); 
    var wordsArray = string.split(' ');//MAKE NOTE

    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var tempName = name.toUpperCase();
    if (object && Array.isArray(object.friends)) {
            for (var i = 0; i < object.friends.length; i++) {
            if (tempName === object.friends[i].toUpperCase()) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var personFriends = array.find(function(person) {
        return person.name === name;
    }).friends;

    var nonFriends = array.filter(function(person) {
        return person.name !== name && personFriends.indexOf(person.name) === -1;//FIND HELP
    })
    .map(function(person) {//MAP HELP
        return person.name;
    });
    return nonFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i = 0; i < array.length; i++){
        if(object.hasOwnProperty(array[i])){
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var dedupArray = [];

    for (var i = 0; i < array.length; i++) {
        if (dedupArray.indexOf(array[i]) === -1) {
            dedupArray.push(array[i]);
        }
    }

    return dedupArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}