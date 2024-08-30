//Elementy galeri w dwóch wersjach
const images = [
    {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
      },
      {
        preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
      },
      {
        preview:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
          'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
      },
    ];

//Uzupełnienie galerii układem

const gallery = document.querySelector(".gallery");
const el = (tag, props) => Object.assign(document.createElement(tag), props);

const createList = ({original, preview, description}) => {
    
         //Tworzenie elementu <ili> o klasie "gallery-item"
         const list = el("li", {className: "gallery-item"});

         //Tworzenie elementu <a> o klasie "gallery-link"
         const link = el("a", {className: "gallery-link", href: original});
         
         //Tworzenie elementu <img> o klasie "gallery-image"
         const img = el("img", {
            className: "gallery-image", 
            src: preview, 
            srcset: original, 
            alt: description 
        });
        
        //Zagnieżdżenie elementów
        link.appendChild(img);
        list.appendChild(link);
        
        //Dodajemy <li> do <ul>
        gallery.appendChild(list);
        
        return list;
    };

    //wywolanie odpowiedniej ilosci obiektow
    images.forEach(image => createList(image));

    let instance;

    //delegacja do dużych formatów obrazów
    gallery.addEventListener("click", event => {
        event.preventDefault();
    
        const clickedPic = event.target;
        console.log(clickedPic.nodeName);
    

        if (clickedPic.nodeName === "IMG") {

            const largeImageURL = clickedPic.srcset; // Uzyskanie linku do dużego obrazu
            console.log(largeImageURL);
            
            //sprawdzanie czy instance czy istnieje instancja jesli tak to ja zamyka
            if(instance) {
                    instance.close();
                }
            
            // Tworzenie okna modalnego z dużym obrazem
            instance = basicLightbox.create(`<img src="${largeImageURL}" alt="Large Image" style="width: 100%; height: auto;">`);
            instance.show();
        } 
    });
    
    //zamykanie klawiszem tutaj escape
    document.addEventListener("keydown", e => {
        if(e.key === "Escape" && instance.visible()) {
            instance.close();
        }
    })

    

