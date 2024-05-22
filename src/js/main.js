import Slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
   const slider = new Slider('.page', '.next');
   slider.render();
});
