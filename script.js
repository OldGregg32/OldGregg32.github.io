
function rot13(message){
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return message.split('').map((x) => {
    if(alphabet.includes(x.toLowerCase())){
      if(x.toLowerCase()===x){
        return alphabet[alphabet.indexOf(x)+13>=26?alphabet.indexOf(x)+13-26:alphabet.indexOf(x)+13]
      } else {
        return alphabet[alphabet.indexOf(x.toLowerCase())+13>=26?alphabet.indexOf(x.toLowerCase())+13-26:alphabet.indexOf(x.toLowerCase())+13].toUpperCase();
      }
    } else {
      return x;
    }
  }).join('');
}

  document.getElementById("result_button").addEventListener("click", ()=> {
    document.getElementById("output_box").innerHTML = rot13(document.getElementById("text_input").value)
  });
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.getElementById("output_box").innerHTML = rot13(document.getElementById("text_input").value)
    }
  });


  function downloadFunc(textContent) {  
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `rot13.txt`;
  
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  }

  document.getElementById("download_button").addEventListener("click", ()=>{
    downloadFunc(document.getElementById("output_box").value);
  });