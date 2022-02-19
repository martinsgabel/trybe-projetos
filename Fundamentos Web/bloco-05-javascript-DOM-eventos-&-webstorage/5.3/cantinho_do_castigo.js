function writeHere (event){
    let newText = document.getElementById('input');
    console.log(newText.value);
    // event.target.innerHTML = newText.value;
  }
  
  let reWritten = document.getElementsByClassName('tech')[0];
  reWritten.addEventListener("keyup", writeHere);