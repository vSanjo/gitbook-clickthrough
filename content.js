document.addEventListener('click', function(){
  for (let a of document.getElementsByClassName('DocumentEditor-LinkNode')){
    a.addEventListener("click", function(){
      let newURL = window.location.href.split('/').slice(0, 9).join('/') + this.getAttribute("aria-label");
      window.location.replace(newURL);
    });
  }
})
