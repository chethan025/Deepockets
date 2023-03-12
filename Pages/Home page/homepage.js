//Home Page js


let images = ['C:/Users/admin/Web/Practice/Deepockets/Resoures/Home/Layer.png', 'C:/Users/admin/Web/Practice/Deepockets/Resoures/Home/Ellipse.png','C:/Users/admin/Web/Practice/Deepockets/Resoures/Home/Layer.png'];

let index = 0;
const imgElement = document.querySelector('.pp');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;

    // imgElement.style.transition='1.5s '
}

window.onload = function () {
    setInterval(change, 5000);
};