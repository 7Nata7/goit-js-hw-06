const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeBoxGallery = image => {
  const {url, alt} = image
  return `
  <ul>
    <li>
    <img src="${url}" alt="${alt}" style = "max-width: 300px"/>
    </li>
  </ul>
  `;
}


const gallery = document.querySelector('.gallery')
const makeGallery = images
.map(makeBoxGallery)
.join('')

gallery.style.display = 'flex'
gallery.style.flexDirection = 'column'
gallery.style.alignItems = 'center'
gallery.style.listStyle = 'none' //не смогла понять как это сделать (:


gallery.insertAdjacentHTML('beforeend', makeGallery)
console.log(makeGallery)