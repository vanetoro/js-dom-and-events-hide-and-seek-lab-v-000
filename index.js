function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(){
  let list = document.querySelectorAll('ul.ranked-list li')
  console.log(list)
  for(var i = 0; i<list.length; i++){
    list[i].innerHTML = (i + 1).toString()
  }

}

function deepestChild(){

}
