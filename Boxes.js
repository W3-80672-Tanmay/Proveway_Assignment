function toggleBox(boxId) {

    const tag = event.target.tagName.toLowerCase();
    if (tag === 'select' || tag === 'option' || tag === 'label') {
      return;
    }
  
    for (let i = 1; i <= 3; i++) {
      const box = document.getElementById("box" + i);
      if (i === boxId) {
        box.classList.toggle("show");
      } else {
        box.classList.remove("show");
      }
    }
  }
  
  function updateCartTotal(price) {
    const totalSpan = document.getElementById("total");
    totalSpan.textContent = `$${price.toFixed(2)} USD`;
  }