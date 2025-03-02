fetch('navbar.html')
  .then(res => res.text())
  .then(text => {
    let oldelem = document.querySelector("#navbar");  // This is the div where the navbar should be inserted
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);  // Replace the old navbar with the new one
  })
  .catch(error => console.error('Error loading navbar:', error));