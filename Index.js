function validateLineup(lineUps) {
  if (checkInSalary(lineUps) && validateTeam(lineUps) && validateGame(lineUps) && checkLineUpPositions(lineUps)) {
    return true
  }
  else {
    return false
  }
}

function checkInSalary(lineUps) {
  const total = (lineUps.map((lineUp) => lineUp.salary)
    .reduce((total, salary) => total + salary)) > 45000 ? false : true

  return total
}

function validateTeam(lineUps) {
  const result = lineUpCountsBy(lineUps, 'teamId')
  const resultValidate = validate(result, 'value > 2')

  return resultValidate
}

function validateGame(lineUps) {
  const result = lineUpCountsBy(lineUps, 'gameId')
  const resultValidate = validate(result, 'value > 3')

  return resultValidate
}

function lineUpCountsBy(lineUps, checkBy) {
  return lineUps.reduce((lineUps, lineUp) => {
    lineUps[lineUp[checkBy]] = lineUps[lineUp[checkBy]] === undefined ? 1 : lineUps[lineUp[checkBy]] + 1

    return lineUps
  }, {})
}

function validate(result, validateStr) {
  for (let [key, value] of Object.entries(result)) {
    if (eval(validateStr)) { return false }
  }

  return true
}

function checkLineUpPositions(lineUps) {
  if (lineUps.length !== 9) return false
  const result = lineUps.reduce((lineUps, lineUp) => {
    lineUps[lineUp.position] = lineUps[lineUp.position] === undefined ? 1 : lineUps[lineUp.position] + 1

    return lineUps
  }, {})
  const cond = '(value === 0) || ((value > 1) && (key !== "OF"))'
  const resultValidate = validate(result, cond)

  return resultValidate
}

module.exports = validateLineup
