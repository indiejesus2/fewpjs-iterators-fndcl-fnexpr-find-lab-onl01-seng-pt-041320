const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(results) {
  const win = results.find( ({result}) => result === 'W');
  if (!!win) {
    return win.year
  } else {
    win
  }
}
