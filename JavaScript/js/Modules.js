import Foot from "./Modules/footer.js";
import { tp, head } from "./Modules/header.js";


document.getElementsByClassName("topbar")[0].innerHTML = tp();
document.getElementsByClassName("header")[0].innerHTML = head
document.getElementById("Footer").innerHTML = Foot