const prettifyNumber = (value) => {
    var thousand = 1000;
    var million = 1000000;
    var billion = 1000000000;
    var trillion = 1000000000000;
    if (value < thousand) {
      return String(value);
    }
  
    if (value >= thousand && value <= 1000000) {
      return Math.round(value / thousand) + 'k';
    }
  
    if (value >= million && value <= billion) {
      return Math.round(value / million) + 'M';
    }
  
    if (value >= billion && value <= trillion) {
      return Math.round(value / billion) + 'B';
    } else {
      return Math.round(value / trillion) + 'T';
    }
  }

  module.exports = prettifyNumber;