function add() {
  var work =  document.getElementById("work")
  var va = work.value.trim()
  if(va === ""){
    alert("Please enter To Do work")
  }
  else{
  let ol = document.getElementById("table") 
  let listItem = document.createElement("tr")
  listItem.setAttribute("id","listItem")
  let workname = document.createElement("td")
  workname.style.minWidth="150px"
  workname.style.maxWidth="150px"
  workname.style.fontSize="18px"
  let del = document.createElement("td")
  let done = document.createElement("td")
  let line = document.createElement("hr")
  line.style.color="gray"
  del.style.cursor="pointer"
  done.style.cursor="pointer"
  workname.innerText = work.value 
  del.innerText = "Delete"
  done.innerText = "Done"
  ol.appendChild(listItem)
  listItem.appendChild(workname)
  listItem.appendChild(done)
  listItem.appendChild(del)
  listItem.style.color="White"
  listItem.style.listStyle="none"
  listItem.style.borderBottom="1px solid red"
  del.style.color="red"
  done.style.color="yellow"
  work.value = ""
  del.addEventListener("click", ()=>{
    ol.removeChild(listItem)
  })

  done.addEventListener("click",()=>{
    workname.style.textDecoration="line-through"
  })
  }
}

