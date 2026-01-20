//1
function checkInput(){
    const myinp = document.querySelector('.myi');
    const mybut = document.querySelector('.myb');
    if (myinp.value.trim() !== '') {
        mybut.hidden = false;
    }else{
        mybut.hidden = true;
    }
}

//2
myinp = document.querySelector('.myi');
el = document.querySelector('.myb');
p = document.querySelector('.pOut');
el.addEventListener('click', handler);

function handler(){
    // const pcount = p.children.length;
    // console.log(pcount);
    if (p.children.length < 4) {
        const np = document.createElement('p');
        np.innerText = myinp.value;
        p.append(np);
        myinp.value = '';
    }else{
        let ffirstChild = p.firstChild;
        p.removeChild(ffirstChild);
        const np = document.createElement('p');
        np.innerText = myinp.value;
        p.append(np);
        myinp.value = '';
    }
}