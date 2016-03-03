module.exports = {
  clearfix: {
    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both'
    }
  },
  /* disable selectable text */
  noSelect: {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
  }
}
