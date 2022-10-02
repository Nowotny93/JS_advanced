function solve() {

    const txt = document.getElementById('text').value
    const nc = document.getElementById('naming-convention').value

    if (nc === 'Pascal Case'){
        let txt_splt = txt.split(' ')
        let end_output = []
        for (const outputElement of txt_splt) {
            let j = outputElement.toLowerCase()
            let w = j.charAt(0).toUpperCase() + j.slice(1);
            end_output.push(w)
        }
        document.getElementById('result').textContent = end_output.join('');
    }else{
        document.getElementById('result').textContent = 'Error!'
    }

}