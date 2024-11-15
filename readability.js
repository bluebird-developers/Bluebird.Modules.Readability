import Readability from "./libs/readability.js";

const article = new Readability(document).parse();
var title = document.getElementsByTagName("title")[0].innerHTML;

const titleHeader = "<title>" + title + "</title>\n";
const stylesHeader = "<style>body {font-family:'Segoe UI'; margin:auto; margin-top:50px; width:60%;}</style>"

document.getElementsByTagName("head")[0].innerHTML = titleHeader + stylesHeader;
document.body.innerHTML = null;
document.body.innerHTML = "<h2>" + title + "</h2>";
document.body.innerHTML += article.content;