function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for(let i = 0; i < rankedLists.length; i++) {
    let regList = rankedLists[i].children
    for (let i = 0; i < regList.length; i++) {
      let current = parseInt(regList[i].innerHTML)
      regList[i].innerHTML  = current + n
    }
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
