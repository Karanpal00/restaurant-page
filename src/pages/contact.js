import { contentContainer, div, h1, h2, p} from "../utils/utils.js";

const conatiner = div.cloneNode(true);
const mainHeading = h1.cloneNode(true);

const addressHeading = h2.cloneNode(true);
const addressPara = p.cloneNode(true);

const phoneHeading = h2.cloneNode(true);
const phonePara = p.cloneNode(true);

const emailHeading = h2.cloneNode(true);
const emailPara = p.cloneNode(true);

const reservationHeading = h2.cloneNode(true);
const reservationPara = p.cloneNode(true);

conatiner.className = 'card';
conatiner.style.marginTop = '8rem';

mainHeading.textContent = 'Contact Us';

addressHeading.textContent = 'Address:';
addressPara.textContent = '123 Heritage Lane, City Center, India';

phoneHeading.textContent = 'Phone:';
phonePara.textContent = '+91 98765 43210';

emailHeading.textContent = 'Email:';
emailPara.textContent = 'hello@tenderscafe.in';

reservationHeading.textContent = 'Reservations:';
reservationPara.textContent = 'Available via call or WhatsApp';

conatiner.appendChild(mainHeading);
conatiner.appendChild(addressHeading);
conatiner.appendChild(addressPara);

conatiner.appendChild(phoneHeading);
conatiner.appendChild(phonePara);

conatiner.appendChild(emailHeading);
conatiner.appendChild(emailPara);

conatiner.appendChild(reservationHeading);
conatiner.appendChild(reservationPara);


const Contact = ()  => {
    contentContainer.textContent = '';
    contentContainer.appendChild(conatiner);
}

export {Contact};

