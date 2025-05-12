function toggleBox(boxId) {


  
    for (let i = 1; i <= 3; i++) {
      const box = document.getElementById("box" + i);
      if (i === boxId) {
        box.classList.toggle("show");
      } else {
        box.classList.remove("show");
      }
    }
  }
  