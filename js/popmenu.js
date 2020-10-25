'use strict';


{
  const open2 = document.getElementById('open2');
  const overlay2 = document.querySelector('.overlay2');
  const close2 = document.getElementById('close2');

  open2.addEventListener('click', () => {
    overlay2.classList.add('show2');
    open2.classList.add('hide2');
  });

  close2.addEventListener('click', () => {
    overlay2.classList.remove('show2');
    open2.classList.remove('hide2');
  });
}


