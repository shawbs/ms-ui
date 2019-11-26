import Container from './container'
import Footer from './footer'
import Header from './header'
import Page from './page'

export default {
    install: function(Vue) {
        Vue.component(Container.name, Container);
        Vue.component(Footer.name, Footer);
        Vue.component(Header.name, Header);
        Vue.component(Page.name, Page);
    }
};