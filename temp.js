/* ## Lineup Rules
1) The total salary of all players in a lineup may not exceed $45, 000
totalSalary <= 45000
2) Lineups may not contain more than 2 players from a single team
players in lineups not in same 2 players from a singleTeam
3) Lineups may not contain more than 3 players from a single game
players in lineups not in same 3 players from singleGame
4) Lineups must contain exactly 3 players with the position of 'OF' and must also contain exactly 1 player from each of the following positions: 'P', 'C', '1B', '2B', '3B', 'SS'
3 players with position 'OF' and 1 player from position['P', 'C', '1B', '2B', '3B', 'SS']

checkInSalary(lineUps)
lineupCheckinSingleTeam()
lineupCheckinSingleGame()
lineupCheckPositions()
 */
function validateLineup(lineUp) {
  // return checkInSalary(lineUp)
  // return lineupCheckPositions(lineUp)
  return lineupCheckinSingleTeam(lineUp)
}

function checkInSalary(lineUps) {
  return (lineUps.map((lineUp) => lineUp.salary)
    .reduce((total, salary) => total + salary)) > 45000 ? false : true
}

function lineupCheckPositions(lineUp) {
  if (lineUp.length !== 9) return false

  let pos = {
    'P': 0, 'C': 0, '1B': 0, '2B': 0, '3B': 0, 'SS': 0, 'OF': 0
  }

  lineUp.map(element => {
    if (Object.keys(pos).indexOf(element.position) >= 0) {
      pos = Object.fromEntries(
        Object.entries(pos).map(([key, value]) => { return (element.position === key) ? [key, value + 1] : [key, value] }))
    }
  })

  // check using includes

  for (let [key, value] of Object.entries(pos)) {
    if ((value === 0) || ((value > 1) && (key !== 'OF'))) {
      return false
    }
  }

  return true
}

const lineUps = [{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
}, {
  id: 3, name: 'Mitch Moreland', position: '1B', teamId: 12, gameId: 123, salary: 2800
}, {
  id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
}, {
  id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
}, {
  id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
}, {
  id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
}, {
  id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
}, {
  id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
}]

//Lineups may not contain more than 3 players from a single game
// 
function lineUpCheck(lineUps, checkBy) {
  let lineUpBy = lineUps.map(lineUp => lineUp[checkBy])

  return lineUps.filter((lineUp, index) => {
    return lineUpBy.indexOf(lineUp[checkBy]) === index
  })
}

function lineUpCheck1(lineUps, checkBy) {
  let lineS = lineUpCheck(lineUps, 'gameId')
  let cnt = 10

  console.log(lineS)

  //lineS = [lineS.map((line) => { line.push(cnt) })]

  // console.log(lineS)
}

function minutesSpentByPerson(lineUps, checkBy, checkByValue) {
  let result

  result = lineUps
    .filter((lineUp) => lineUp[checkBy] === checkByValue)
    .reduce((cnt) => cnt + 1, 0)
  console.log(result)

  /*   for (let i = 0; i < lineUpBy.length; i++) {
      result = lineUps
        .filter((lineUp) => lineUp[checkBy] === lineUpBy[i][checkBy])
        .reduce((cnt) => cnt + 1, 0)
        
     
    } */

  // console.log(lineUpBy)

  /*  return lineUps
     .filter((lineUp) => lineUp[checkBy] === checkByValue)
     .reduce((cnt) => cnt + 1, 0) */
}

//const total = lineUpCheck1(lineUps, 'gameId')

//console.log(total)
// console.log(lineUpCheck(lineUps, 'gameId'))

console.log(lineCountsBy(lineUps, 'gameId'))


function lineCountsBy(lineUps, checkBy) {
  return lineUps.reduce((lineUps, lineUp) => {
    lineUps[lineUp[checkBy]] = lineUps[lineUp[checkBy]] === undefined ? 1 : lineUps[lineUp[checkBy]] + 1

    return lineUps
  }, {})
}
