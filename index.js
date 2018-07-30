function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list li')
  console.log(list)
  for(var i = 0; i<list.length; i++){
    console.log(list[i])
    list[i].innerHTML = (i ).toString()
  }

}

function deepestChild(){

}
