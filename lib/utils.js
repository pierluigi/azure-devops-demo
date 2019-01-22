const utils = {
  greetings: (to) => {
    if (!to) {
      throw new Error('Argument expected');
    }

    return `Hello ${to} 👋👋`;
  },

  makeHeading: (text) => text
    ? `<h1>${String(text).trim()}</h1>`
    : ''

};

module.exports = utils;
