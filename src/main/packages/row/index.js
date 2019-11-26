import Row from './main'

Row.install = function(Vue) {
    Vue.component(Row.name, Row);
};

export default Row;