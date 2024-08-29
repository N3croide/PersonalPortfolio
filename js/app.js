let item = document.querySelector('.photo');
item.addEventListener('mousemove', (e) => {

    let rect = item.getBoundingClientRect();
    let posX = e.clientX - (rect.left + rect.width / 2);
    let posY = e.clientY - (rect.top + rect.height / 2);


    let rX = -(posY / rect.height) * 30;
    let rY = (posX / rect.width) * 30; 


    item.style.transform = `perspective(500px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    item.style.transition = 'transform 0.1s ease-out';
})

item.addEventListener('mouseout', () => {
    item.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
    item.style.transition = 'transform 0.3s ease-out';

})