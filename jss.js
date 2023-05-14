function dnaToRna(dnaString) {
    let rnaString = '';
    for (let i = 0; i < dnaString.length; i++) {
      if (dnaString[i] === 'T') {
        rnaString += 'U';
      } else {
        rnaString += dnaString[i];
      }
    }
    return rnaString
  }