// 1
//  var a=4;
//  var b=12;
//  console.log(a+b);
//  console.log(b%a);
//  console.log(b/a);

//2
// var ten = 'Nam';
// var ho = 'Nguyen';
// console.log(ten +' '+ ho);

//3
//  var name = 'happy news year';
//  var a=name.length;
//  var b = name.indexOf("y");
//  var c = name.lastIndexOf("y");
//  console.log(a);
//  console.log(b);
//  console.log(c);

//4
// var a=4;
// if(a%2==0)
// console.log('true');
// else
// console.log('false');

//5 Chạy vòng lặp với i = 0, i < 10, i++. 
//Tính tổng giá trị mỗi lần i tăng lên 1 
//(gợi ý dùng vòng lặp for, khai báo thêm 1 biến total bên ngoài for và sử dụng toán tử += để cộng dồn giá trị của i). In ra kết quả.
// var total=0;
// for(var i = 0; i<10; i++)
// {
//     total += i;
// }
// console.log(total);

//6
// var n=0;
// while(n<=20){
//     if(n % 2 ==0)
//     {
//         console.log(n);
//     }
//     n++;
// }

//7 Khi nào dùng Var, Let, Const. Phần biệt giữa Biến toàn cục và biến cục bộ?

//8 Khởi tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng còn lại (gợi ý dùng splice).



//----option lang
let lang= document.querySelector('.lang');
let langCur = document.querySelector('.lang .lang__current span');
let langItems = document.querySelectorAll('.lang .lang__option a');
lang.addEventListener('click', function(e){
    e.stopPropagation();
    lang.classList.toggle('active');
});

langItems.forEach(function  (item) {
    item.addEventListener('click', function(){
        let langText = this.textContent;
        let langCurSpan = langCur.textContent;
        langCur.innerHTML = langText;
        this.innerHTML = langCurSpan;
        lang.classList.remove('active');
    });
});

document.addEventListener('click', function(e){
    e.stopPropagation();
});

//header
let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightSlider= slider.clientHeight;
let heightHeader= header.clientHeight;

function changeBgHeader(){
    let scrollY=window.pageYOffset;
    if(scrollY > (heightSlider - heightHeader)){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

//backtotop
let backtotop= document.querySelector('.totop'); 
let getHeightWindow=window.innerHeight;
function showBacktotop(){
    let scrollY=window.pageYOffset;
    if(scrollY > getHeightWindow){
        backtotop.classList.add('active');
    }else{
        backtotop.classList.remove('active');
    }
} 
backtotop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});

document.addEventListener('scroll', function(){
    changeBgHeader();
    showBacktotop();
});

//backtotopfooter
let totop= document.querySelector('.backtotop');
totop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


///tags news
let tagText = document.querySelectorAll('.news__tags .tag');
let tagList = document.querySelectorAll('.news__list');

tagText.forEach(function (item, index) {
    item.addEventListener('click', function(){
        let tagID = index + 1;
        console.log(tagID);
        tagText.forEach(function(tag){
            tag.classList.remove('active');
        });
        tagList.forEach(function(tags){
            tags.classList.remove('active');
        });
        this.classList.add('active');
        document.querySelector('.news__list-' + tagID).classList.add('active');

    })
})

//scroll menu
function removeActiveMenu(){
    menus.forEach(function(menu_element,menu_index){
        menu_element.classList.remove('active');    
    });
}
function removeActiveNav(){
    navH.forEach(function(nav_element,nav_index){
        nav_element.classList.remove('active');    
    });
}
let menus= document.querySelectorAll('header .menu a');
let heightH = document.querySelector('header').offsetHeight;
///lay chieu cao bao gom padding anh border
menus.forEach(function(item, index){
    item.addEventListener('click',function(e){
        e.preventDefault()
        let className= item.getAttribute('href').replace('#','');
        let section = document.querySelector('.' + className);
        window.scrollTo({
            top: section.offsetTop - heightH,
            behavior: 'smooth'
        });
        removeActiveMenu();
        item.classList.add('active');
    });
});

//---nav
let nav = document.querySelector('.nav');
let btnmenu = document.querySelector('header .btnmenu');
let navH = document.querySelectorAll('header .nav a')
btnmenu.addEventListener('click', toggeleMenu);
function toggeleMenu(){
    nav.classList.toggle('active');
    this.classList.toggle('active');
};
navH.forEach(function(item_nav, index_nav){
    item_nav.addEventListener('click',function(element){
        element.preventDefault()
        let classN= item_nav.getAttribute('href').replace('#','');
        let sec = document.querySelector('.' + classN);
        window.scrollTo({
            top: sec.offsetTop - heightH,
            behavior: 'smooth'
        });
        removeActiveNav();
        item_nav.classList.add('active');
        nav.classList.remove('active');
    });
    
    
});

///Slider

let listItemSlider = document.querySelectorAll('.slider__item');
let currentSlider = 0 ;
let number = document.querySelector('.slider__bottom-paging .number');
let dot_li = document.querySelectorAll('.slider__bottom-paging .dotted li');
listItemSlider.forEach(function(itemSlider,index){
    if(itemSlider.classList.contains('active')){
        currentSlider == index;
    }
});
function showNumber(index){
    number.innerHTML = (index).toString().padStart(2,'0');
}
showNumber(currentSlider+1);
dot_li[currentSlider].classList.add('active');

document.querySelector('.btnctr.next').addEventListener('click',function(){
if(currentSlider< listItemSlider.length -1){
//     listItemSlider[currentSlider].classList.remove('active');
//  listItemSlider[currentSlider+1].classList.add('active');
//  currentSlider++;
goto(currentSlider+1);
}else{
    // listItemSlider[currentSlider].classList.remove('active');
    // listItemSlider[0].classList.add('active');
    // currentSlider=0;
    goto(0);
} 
});
document.querySelector('.btnctr.prev').addEventListener('click',function(){
    if(currentSlider>0){
        // listItemSlider[currentSlider].classList.remove('active');
        // listItemSlider[currentSlider-1].classList.add('active');
        // currentSlider--;
        goto(currentSlider-1);
    }else{
        // listItemSlider[currentSlider].classList.remove('active');
        // listItemSlider[listItemSlider.length-1].classList.add('active');
        // currentSlider=listItemSlider.length-1;
        goto(listItemSlider.length-1);
    }
});

function goto(index){
    listItemSlider[currentSlider].classList.remove('active');
    listItemSlider[index].classList.add('active');
    dot_li[currentSlider].classList.remove('active');
    dot_li[index].classList.add('active');
    currentSlider= index;
    showNumber(currentSlider+1);
    
}

dot_li.forEach(function(li,index){
    li.addEventListener('click',function(){
        goto(index);
    });
})


//loading
// $(window).load(function(){
//     console.log(ok);
//     $('.loading').addClass('hide');
// })


var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};


    initPhotoSwipeFromDOM('.carousel-img');



    ///slider THƯ VIỆN FLICKITY
    let $carousel = $('.slider__item-wrap');
    $carousel.flickity({
        cellAlign:'center',
        contain: true,
        
        wrapAround: true,
        prevNextButtons: false,
       
        // on:{
        //     ready: function(){
        //         let dotted= $('flickity-page-dots');
        //         paging=$('.slider__bottom-paging .dotted');
        //         dotted.appendTo(paging);
        //     },
        //     change:function(index){
        //         let number = $('slider__bottom-paging .number');
        //         let indexPage=index+1;
        //         number.text(indexPage.toString().padStart(2,0)) 
        //     }
        // }
    });
    $('.slider__bottom-control .prev').on('click',function(){
        $carousel.flickity('previous');
    });
    $('.slider__bottom-control .next').on('click',function(){
        $carousel.flickity('next');
    });

    //slider THƯ VIỆN FLICKITY
    var $a = $('.photos__wrap').flickity({
        lazyLoad: true,
     
      });
      $a.on( 'lazyLoad.flickity', function( event, cellElement ) {
        var img = event.originalEvent.target;
        console.log( event.originalEvent.type, img.src );
      });
      
      
      