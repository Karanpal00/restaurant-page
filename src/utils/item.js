import {div, h2, img, p} from './utils.js';

const createItem = (image, heading, para) => {

    const item = div.cloneNode(true);
    item.className = 'item';

    const itemHeading = h2.cloneNode(true);
    const imgBox = img.cloneNode(true);

    const itemDescription = div.cloneNode(true);
    const itemParagraph = p.cloneNode(true);

    imgBox.src = image;
    itemHeading.textContent = heading;
    itemParagraph.textContent = para;

    itemDescription.appendChild(itemHeading);
    itemDescription.appendChild(itemParagraph);

    item.appendChild(imgBox);
    item.appendChild(itemDescription);

    return item;
}

export {createItem};

