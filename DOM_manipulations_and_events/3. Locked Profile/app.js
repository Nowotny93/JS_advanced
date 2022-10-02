//function lockedProfile() {
    //document.getElementById('main').addEventListener('click', (e) => {
        //if(e.target.tagName === 'BUTTON'){
            //const profile = e.target.parentNode
            //const isLocked = profile.querySelector('input[type=radio]:checked').value === 'lock'
            //if (isLocked){
                //return
            //}
            //let div = profile.querySelector('div')
            //let isVisible = div.style.display === 'block'
            //div.style.display = isVisible ? 'none' : 'block'
            //e.target.textContent = !isVisible ? 'Hide it' : 'Show more'
        //}
    //})
//}

function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}