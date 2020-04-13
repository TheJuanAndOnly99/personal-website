import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Full-Stack Developer", "Ruby-on-Rails", "JavaScript", "Multilingual"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
