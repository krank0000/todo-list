let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  e.preventDefault(); // 阻止表單送出

  // 取得表單欄位值
  let form = e.target.parentElement;
  let todoText = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;

  if (todoText === "") {
    alert("請輸入待辦事項");
    return;
  }

  // 建立元素
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todoText;
  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerText = todoMonth + "/" + todoDate;
  todo.appendChild(text); //將text加入todo
  todo.appendChild(time); //將time加入todo

  // 建立check按鈕
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    todoItem.classList.toggle("done");
    console.log(e.target.parentElement);
  });
  //建立垃圾桶按鈕
  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.addEventListener("click", (e) => {
    let todoItem = e.target.parentElement;
    //動畫結束後再執行刪除
    todoItem.addEventListener("animationend", () => {
      todoItem.remove();
    });
    todoItem.style.animation = "scaleDown 0.3s forwards";
  });

  todo.appendChild(completeButton); //將completeButton加入todo
  todo.appendChild(trashButton); //將trashButton加入todo

  todo.style.animation = "scaleUp 0.3s forwards"; //新增todo時的動畫

  form.children[0].value = ""; //清空輸入框
  section.appendChild(todo); //將todo加入section
});
