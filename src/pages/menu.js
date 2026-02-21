import coffee from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/coffee.png';
import gc from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/gourmet-chicken.png';
import cp from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/creamy-pasta.png';
import dessert from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/dessert.png';
import grilledChicken from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/grilled-chicken.png';
import {createItem} from '../utils/item.js';
import {contentContainer, div, h1} from '../utils/utils.js';


const coffeeItem = createItem(coffee, 'Coffee','Rich, slow-brewed premium coffee served warm with a smooth aroma and deep roasted flavor. Perfectly balanced for a refined evening experience.');
const gcItem = createItem(gc, 'Gourmet Chicken', 'Tender, expertly seasoned chicken prepared with premium spices and finished with a delicate garnish for a sophisticated presentation.');
const cpItem = createItem(cp, 'Creamy Pasta', 'Silky, house-style creamy pasta made with a delicate blend of herbs and rich sauce, finished with subtle seasoning for a comforting yet elegant taste.');
const dessertItem = createItem(dessert, 'Signature Dessert', 'A refined chocolate dessert crafted with layered textures and smooth sweetness, designed to complement a luxurious dining experience.');
const grilledChickenItem = createItem(grilledChicken, 'Grilled Chicken', 'Juicy grilled chicken cooked to perfection, served with subtle seasoning and a refined finish that enhances its natural flavors.');

const heading = h1.cloneNode(true);
heading.textContent = 'Menu';
const displayItem = div.cloneNode(true);
displayItem.className = 'menu-items';
displayItem.style.marginTop = '8rem';
displayItem.appendChild(heading);
displayItem.appendChild(coffeeItem);
displayItem.appendChild(gcItem);
displayItem.appendChild(cpItem);
displayItem.appendChild(dessertItem);
displayItem.appendChild(grilledChickenItem);

const Menu = () => {
    contentContainer.textContent = '';
    contentContainer.appendChild(displayItem);
}

export {Menu};