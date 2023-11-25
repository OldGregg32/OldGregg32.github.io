
function rotEncrypt(message){
  let rotNum = parseInt(document.getElementById("rot_num").value);
    if(rotNum < -26 || rotNum > 26){
      return 'Rot number is either too low or too high. Max of 26, min of -26.';
    }
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return message.split('').map((x) => {
      if(alphabet.includes(x.toLowerCase())){
        if(x.toLowerCase()===x){
          return alphabet[alphabet.indexOf(x)+rotNum>=26?alphabet.indexOf(x)+rotNum-26:alphabet.indexOf(x)+rotNum]
        } else {
          return alphabet[alphabet.indexOf(x.toLowerCase())+rotNum>=26?alphabet.indexOf(x.toLowerCase())+rotNum-26:alphabet.indexOf(x.toLowerCase())+rotNum].toUpperCase();
        }
      } else {
        return x;
      }
    }).join('');
  }


  function rotDecrypt(message){
    let rotNum = parseInt(document.getElementById("rot_num").value);
    if(rotNum < -26 || rotNum > 26){
      return 'Rot number is either too low or too high. Max of 26, min of -26.';
    }
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return message.split('').map((x) => {
      if(alphabet.includes(x.toLowerCase())){
        if(x.toLowerCase()===x){
          return alphabet[alphabet.indexOf(x)-rotNum<0?26-(rotNum-(alphabet.indexOf(x))):alphabet.indexOf(x)-rotNum]
        } else {
          return alphabet[alphabet.indexOf(x.toLowerCase())+rotNum>=26?alphabet.indexOf(x.toLowerCase())+rotNum-26:alphabet.indexOf(x.toLowerCase())+rotNum].toUpperCase();
        }
      } else {
        return x;
      }
    }).join('');
  }

  document.getElementById("result_button").addEventListener("click", ()=> {
    if(document.getElementById('encrypt').checked){
      document.getElementById("output_box").innerHTML = rotEncrypt(document.getElementById("text_input").value)
    } else {
      document.getElementById("output_box").innerHTML = rotDecrypt(document.getElementById("text_input").value)
    }
  });
  
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if(document.getElementById('encrypt').checked){
        document.getElementById("output_box").innerHTML = rotEncrypt(document.getElementById("text_input").value)
      } else {
        document.getElementById("output_box").innerHTML = rotDecrypt(document.getElementById("text_input").value)
      }
    }
  });