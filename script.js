const carousal=document.querySelector('.slider-container');
const prev=document.querySelector('#prev');
const next=document.querySelector('#next');
const imageContainer=document.querySelector('.carousal');

let currpage=0;
let interval=null;

const size=8;

function genereateImage() {
    for(let i=0;i<size;i++){
        const slide=document.createElement('div');
        slide.classList.add('slides');
        const image=document.createElement('img');
        image.src=`https://picsum.photos/seed/picsum${i}/400/200`;

        slide.append(image);
        imageContainer.append(slide);

    }
}

genereateImage();
const slides=document.querySelectorAll('.slides');

next.addEventListener('click',(event)=>{
    event.preventDefault();
    nextPage();
})
prev.addEventListener('click',(event)=>{
    event.preventDefault();
    prevPage();
})
const dots=document.querySelectorAll("#dots");
function pageChange() {
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-currpage)*100}%`;
    })
    dots.forEach((element,index)=>{
        if(currpage==index){
            element.classList.add('Active')
        }
        else{
            element.classList.remove('Active')
        }
        
    })
}

function autoChange(){
    interval=setInterval(nextPage,2000);
}

function nextPage() {
    currpage=(currpage+1)%slides.length;
    pageChange();
}
function prevPage() {
    currpage=(currpage-1+slides.length)%slides.length;
    pageChange();
}


autoChange();


