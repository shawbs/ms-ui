import Button from './main'

Button.install = function(Vue) {
    Vue.component(Button.name, Button);
};

export default Button;