
const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
    
//YEN?? DE??????KENE MAPLA YEN?? ARRAY ATADIK
  let categories = menu.map(categories=>categories.category)
  //AYNI DE??ERLER?? SETLE AYIKLADIK
  let categoriList = [...new Set(categories)]
  //YEN?? DE??ER EKLEME
  categoriList.unshift("All")
  //BUTONLARI YERLE??T??RD??????M??Z YER?? SE??T??K
  const btnContainer =document.querySelector(".btn-container")
  const sectionCenter =document.querySelector(".section-center")
//
  categoriList.forEach(buttons=>{
    
    const buttonDOM = document.createElement("button")
    buttonDOM.addEventListener("click",buttonClick)
    buttonDOM.className=("btn btn-outline-dark btn-item")
    buttonDOM.innerText=buttons
    buttonDOM.setAttribute("id",buttons)
    btnContainer.append(buttonDOM)

  })
  //for d??ng??syle men?? itemlerine yerle??tirme ve men?? itemlerini ekleme
  function addMenu??tem(menu){
    sectionCenter.innerHTML=""
    for(let i=0; i<menu.length; i++){

    let menu??tems =document.createElement("div")
    menu??tems.className=("menu-items col-lg-6 col-sm-12") 
    sectionCenter.append(menu??tems) 

    let menuInfo = document.createElement("div")
    menuInfo.className=("menu-info")
   
    
    let image = document.createElement("img")
    image.className=("photo")
    image.src=menu[i].img
    image.alt=menu[i].title
   
    menu??tems.append(image)
   

    let menuTitle = document.createElement("div")
    menuTitle.className=("menu-title")
    menuInfo.append(menuTitle)

    let title = document.createElement("h4")
    title.innerHTML= menu[i].title
        menuTitle.append(title)
    let price =document.createElement("h4")
    price.className=("price")
    price.innerHTML=menu[i].price
    menuTitle.append(price)
    let text =document.createElement("div")
    text.className=("menu-text")
    text.innerHTML=menu[i].desc
    menuInfo.append(text)
    
    menu??tems.append(menuInfo)
   
     }
  }
    // 
  function buttonClick(){
    const result = (this.getAttribute("id") == "All") ? menu : menu.filter((item) => {
      return item.category == this.getAttribute("id");
    });
    addMenu??tem(result);
  };
   
  
// sayfa y??klendi??inde men??y?? getirme
  window.addEventListener('DOMContentLoaded', (event) => {
    addMenu??tem(menu)
  });
  



