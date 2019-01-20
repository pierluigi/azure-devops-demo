const utils = {
  greetings: (to) => {
    if (!to) {
      throw new Error('Argument expected');
    }

    return `Hello ${to} 👋👋`;
  }
};

module.exports = utils;
