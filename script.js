const input = document.getElementById("text_input").value;
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

  document.getElementById("result_button").addEventListener("click", ()=> document.getElementById("output_box").innerHTML = rot13(input);
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.getElementById("output_box").innerHTML = rot13(document.getElementById("text_input").value)
    }
  });