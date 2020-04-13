var bannerImg = document.querySelector(".banner");
document.body.classList.add('js-loading');
bannerImg.addEventListener("load", removeLoadingClass);
const removeLoadingClass = () => {
  document.body.classList.remove('js-loading');
}

export { removeLoadingClass };
