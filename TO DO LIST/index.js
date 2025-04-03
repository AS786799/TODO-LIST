var input = document.getElementById("input");
    var ul = document.getElementById("listcon");

    function add() {
      var listitem = document.createElement("li");
      listitem.innerHTML =
        input.value + "<button onclick='remove()'>Delete</button>";
      ul.append(listitem);
    }
    function remove() {
      event.target.parentElement.remove();
    }