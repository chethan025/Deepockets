//Home Page js


let images = ['https://chethan025.github.io/Deepockets/Resoures/Home/Layer.png', 'https://chethan025.github.io/Deepockets/Resoures/Home/Ellipse.png','https://chethan025.github.io/Deepockets/Resoures/Home/Layer.png'];

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





class modal{
    constructor(){
        this.mdl=document.querySelector(".btncht")
        this.cgl=document.querySelector(".opn")
    }

    open(){
        this.mdl.style.display='block'
        // this.mdl.style.transition='ease-in-out 0.5s'
        this.cgl.style.display='none'
    }

    close(){
        this.mdl.style.display='none'
        this.cgl.style.display='block'

    }
}

var opnbtn=document.querySelector(".opn")
var clsbtn=document.querySelector(".cls")
var mdl=new modal()


opnbtn.addEventListener('click',function(event){
    mdl.open()
})

clsbtn.addEventListener('click',function(event){
    mdl.close()
})
