const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let re = / /g;
  let str = this.phrase;
  let strWithoutSpaces = str.replace(re, '');
  let strAsLetters = strWithoutSpaces.split('');
  let sortedStrAsLetters = strAsLetters.sort();
  let sortedAlphabet = this.alphabet.sort();
    if (sortedStrAsLetters === sortedAlphabet){
      return true;
    }
    else {
      return false;
    };
  };

module.exports = PangramFinder;
