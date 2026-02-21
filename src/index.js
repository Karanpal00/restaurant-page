import { HomePage } from "./pages/home.js";
import { Hours } from "./pages/hours.js";
import {Menu} from "./pages/menu.js"
import { Contact } from "./pages/contact.js";
import './styles.css';
import { homeBtn, menuBtn, hoursBtn, contactBtn } from "./utils/utils.js";

HomePage();

homeBtn.addEventListener('click', HomePage);
menuBtn.addEventListener('click', Menu);
hoursBtn.addEventListener('click', Hours);
contactBtn.addEventListener('click', Contact)