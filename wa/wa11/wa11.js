const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const alts = {
  '1.jpg': 'gengar if he was cool',
  '2.jpg': 'mew if it was cool',
  '3.jpg': 'kiba abused this fool',
  '4.jpg': 'this is just cool',
  '5.jpg': 'uhh this pokemon is melting'
};

for (const image of img) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
