/*function create(words) {
   const content = document.getElementById('content')
   for (let i =0; i<words.length; i++){
      let divEl = document.createElement("div")
      let pEl = document.createElement("p")
      pEl.textContent = words[i]
      pEl.style.display = 'none'
      divEl.appendChild(pEl)
      content.appendChild(divEl)
   }

   content.addEventListener('click', function(e){
      if(e.target.tagName==='DIV' || e.target.tagName==='P'){
         const p = e.target.children[0] || e.target
         const isVisible = p.style.display === 'block'
         p.style.display = isVisible ? 'none' : 'block'
      }
   })
}*/

function create(words) {
   let content = document.querySelector("#content");

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', function(){
         p.style.display = 'block';
      })
      content.appendChild(div);
   }
}