import Col from './main'

Col.install = function(Vue) {
    Vue.component(Col.name, Col);
};

export default Col;