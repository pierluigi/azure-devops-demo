module.exports = {
  greetings: function(to) {
    if (!to) {
      throw new Error("Argument expected");
    }

    return `Hello ${to} 👋👋`;
  }
};
