function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('#nested .target')
}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll('.ranked-list')
//
//   for(let i = 0; i < rankedLists.length; i++) {
//     let regList = rankedLists[i].children
//     for (let i = 0; i < regList.length; i++) {
//       let current = parseInt(regList[i].innerHTML)
//       regList[i].innerHTML  = current + n
//     }
//   }
// }
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

// function deepestChild() {
//   return document.querySelector('#grand-node div div div div')
// }

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
