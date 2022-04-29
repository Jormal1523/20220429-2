window.onload = function () {
  var list = document.getElementById("list");
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var container = document.getElementById("container");
  var buttons = document.getElementById("buttons").getElementsByTagName("span");
  var index = 1;

  function animate(offset) {
    //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
    var newLeft = parseInt(list.style.left) + offset;
    list.style.left = newLeft + "px";
    list.style.transition = "300ms ease";
    if (newLeft < -1*container.getBoundingClientRect().width) {
      list.style.left = 0 + "px";
    }
    if (newLeft > 0) {
      list.style.left = -1*container.getBoundingClientRect().width;
    }
  }
  var timer;
  function autoplay() {
    timer = setInterval(function () {
      next.onclick();
    }, 3000);
  }
  autoplay();
  function stopplay() {
    clearInterval(timer);
  }
  function showButton() {
    //清除之前的样式
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].className == "on") {
        buttons[i].className = "";
      }
    }
    buttons[index - 1].className = "on";
  }
  prev.onclick = function () {
    index -= 1;
    if (index < 1) {
      index = 10;
    }
    showButton();
    animate(800);
  };
  next.onclick = function () {
    index += 1;
    if (index > 10) {
      index = 1;
    }
    showButton();
    animate(-1*container.getBoundingClientRect().width);
  };
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      var clickIndex = parseInt(this.getAttribute("index"));
      var offset = container.getBoundingClientRect().width * (index - clickIndex);
      animate(offset);
      index = clickIndex;
      showButton();
    };
  }
  container.onmouseover = stopplay;
  container.onmouseout = autoplay;
};

