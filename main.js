// show hidden PASSWORD

const showHiddenPass = ()=>{
    const input = document.querySelectorAll('.inputPassword'),
        iconEye = document.querySelectorAll('.iconEye');
        
    iconEye.forEach((i , y)=>{
        i.addEventListener('click', ()=>{
            // change password to text
            if(input[y].type === 'password'){
                input[y].type = 'text'
                // Icon change
                i.classList.add('bx-show-alt');
                i.classList.remove('bx-hide');

            }else{
                input[y].type = 'password'
                i.classList.remove('bx-show-alt');
                i.classList.add('bx-hide');
            }
        })
        
    })
}

showHiddenPass()