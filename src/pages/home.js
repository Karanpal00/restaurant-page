import banner from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/banner1.png';
import coffee from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/coffee.png';
import gourmetChicken from '/home/karan-pal/full-stack/odin-project/repos/restaurant-page/assets/gourmet-chicken.png'
import {contentContainer, div, h2, img, p} from '../utils/utils.js';
import {createItem} from '../utils/item.js';

const bannerDiv = div.cloneNode(true);
const aboutUs = div.cloneNode(true);
aboutUs.className = 'card';
const displayItems = div.cloneNode(true);
displayItems.className = 'menu-items';
const displayItemsHeading = h2.cloneNode(true);
const aboutUsHeading = h2.cloneNode(true);
const aboutUsParagraph = p.cloneNode(true);


bannerDiv.style.backgroundImage = `url(${banner})`;
bannerDiv.style.height = '100vh';
bannerDiv.style.backgroundRepeat = 'no-repeat';


aboutUsHeading.textContent = 'About Tenders';

aboutUsParagraph.textContent = 'Our café is designed to feel intimate yet sophisticated — warm wooden textures, soft ambient lighting, and a calm setting that invites conversation, creativity, and quiet indulgence. Whether you are here for a carefully brewed coffee, a thoughtfully plated dish, or an evening escape from the city rain, every detail is curated to offer a memorable experience.'

aboutUs.appendChild(aboutUsHeading);
aboutUs.appendChild(aboutUsParagraph);

const coffeeItem = createItem(coffee, 'Coffee','Rich, slow-brewed premium coffee served warm with a smooth aroma and deep roasted flavor. Perfectly balanced for a refined evening experience.');
const gcItem = createItem(gourmetChicken, 'Gourmet Chicken', 'Tender, expertly seasoned chicken prepared with premium spices and finished with a delicate garnish for a sophisticated presentation.');

console.log(coffeeItem);
displayItemsHeading.textContent = 'Featured Menu Items';

displayItems.appendChild(displayItemsHeading);
displayItems.appendChild(coffeeItem);
displayItems.appendChild(gcItem);

const HomePage = () => {
    contentContainer.textContent = '';
    contentContainer.appendChild(bannerDiv);
    contentContainer.appendChild(aboutUs);
    contentContainer.appendChild(displayItems);
}

export {HomePage};
