import defaultLang from './lang/zh-CN';
import Vue from 'vue';
import Format from './format';

const format = Format(Vue);
let lang = defaultLang;

export const t = function(path, options) {
    let value;

    const array = path.split('.');
    let current = lang;
    // console.log(current)
    // console.log(path, array)
    for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
    }
    // console.log(value)
    return '';
};

export const use = function(l) {
    lang = l || lang;
}

export default { use, t };
