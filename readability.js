import Readability from "./libs/readability.js";

const article = new Readability(document).parse();
var title = document.getElementsByTagName("title")[0].innerHTML;

const titleHeader = "<title>" + title + "</title>\n";
const stylesHeader = "<style>body {font-family:'Segoe UI'; margin:auto; margin-top:50px; width:60%;} @media (prefers-color-scheme: dark) { body { background-color: #202020; color: white; } a:link { color: #9cdcfe; } a:visited { color: #9cdcfe; }}</style>"

document.getElementsByTagName("head")[0].innerHTML = titleHeader + stylesHeader;
document.body.innerHTML = null;
document.body.innerHTML = "<h2>" + title + "</h2>";
document.body.innerHTML += article.content;