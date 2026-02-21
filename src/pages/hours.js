import {contentContainer, div, h1, p} from '../utils/utils.js';

const container = div.cloneNode(true);
const heading = h1.cloneNode(true);
const para = p.cloneNode(true);
const para2 = p.cloneNode(true);

container.className = 'card';
container.style.marginTop = '8rem';
heading.textContent = 'Hours'
para.textContent ='Monday – Friday  10:00 AM – 10:00 PM';
para2.textContent = 'Saturday – Sunday  9:00 AM – 11:30 PM';

container.appendChild(heading);
container.appendChild(para);
container.appendChild(para2);

const Hours = () => {
    contentContainer.textContent = '';
    contentContainer.appendChild(container);
}

export {Hours};