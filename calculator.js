module.exports = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },

  sayCiaoInItalian: function() {
    return "CIAO";
  },
  
  saySalutInFrench: function(a) {
    if (a) { return "SALUT, " + a };
    return "SALUT";
  }
};
