import Image from './main'

Image.install = function(Vue) {
    Vue.component(Image.name, Image);
};

export default Image;