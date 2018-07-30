function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(var i = 0; i<list.length; i++){
    list[i].innerHTML = (parseInt(innerHTML) + n ).toString()
  }

}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
