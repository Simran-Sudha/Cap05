let ans=document.querySelector("body")
let data =[
    { 
      "id": "001",
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "https://unsplash.com/photos/9DaOYUYnOls",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "id": "002",
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "https://unsplash.com/photos/CXYPfveiuis",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "id": "003",
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "https://unsplash.com/photos/9zsHNt5OpqE",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "id": "004",
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "https://unsplash.com/photos/bhBONc07WsI",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "id": "005",
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "https://unsplash.com/photos/g827ZOCwt30",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "id": "006",
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "https://unsplash.com/photos/UhdlN7u87nA",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "id": "007",
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "https://unsplash.com/photos/zMRLZh40kms",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "id": "008",
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "https://unsplash.com/photos/-FVaZbu6ZAE",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "id": "009",
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "https://unsplash.com/photos/YTRtCfniV8I",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "id": "010",
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "https://unsplash.com/photos/DRZQLqm-wk8",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    }
]
let name =document.getElementById("name").value;
let email=document.getElementById("email").value;
let mob=document.getElementById("mob").value;
let submit=document.getElementById("submit");
let result=document.querySelector("#h1");
let form =document.querySelector("form");
let msg=document.querySelector("")


   
function click(){
  form.style.display="none";

}

    

