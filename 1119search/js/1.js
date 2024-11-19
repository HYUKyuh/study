const wishList = [];

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
  const wish = document.querySelector("#wish").value;
  if (wish != null) {
    wishList.push(wish);
    document.querySelector("#wish").value = "";
    document.querySelector("#wish").focus()
  }
  showList();
}

function showList() {
  let list = "<ul>";
  for (let i=0; i<wishList.length; i++) {
    list += "<li>" + wishList[i] + "<span class='close' id=" + i + ">X</span></li>";
  }

  list += "</ul>";
  document.querySelector("#wishList").innerHTML = list;
  const remove = document.querySelectorAll(".close");
  for (let i=0; i<remove.length; i++) {
    remove[i].addEventListener("click",removeList);
  }
}

function removeList() {
  const id = this.getAttribute("id");
  wishList.splice(id, 1);
  showList();
}


