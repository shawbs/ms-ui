import SideMenu from './main'

SideMenu.install = function(Vue) {
    Vue.component(SideMenu.name, SideMenu);
};

export default SideMenu;