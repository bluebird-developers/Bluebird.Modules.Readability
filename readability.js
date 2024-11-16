import Readability from "./libs/readability.js";

const article = new Readability(document).parse();
const title = article.title;
const content = article.content;

const titleHeader = "<title>" + title + "</title>\n";
const stylesHeader = "<style>body { font-family: 'Segoe UI'; max-width: 600px; margin: auto; margin-top: 20px; } img { max-width: 100%; height: auto; } @media (prefers-color-scheme: dark) { body { background-color: #202020; color: white; } a:link { color: #9cdcfe; } a:visited { color: #9cdcfe; } }</style>"

document.getElementsByTagName("head")[0].innerHTML = titleHeader + stylesHeader;
document.body.innerHTML = null;
document.body.innerHTML = "<h2>" + title + "</h2>";
document.body.innerHTML += content;