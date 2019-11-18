const hasOwnProperty = Object.prototype.hasOwnProperty;

class Comm {
    get now () {
        return new Date().getTime();
    }
    noop () { }
    /**
     * 创建不重复的 Id
     * @param prefix
     * @returns {string}
     */
    getUniqueId (prefix = '') {
        this.autoIncrement++;
        const cDate = new Date().getTime();
        const offDate = new Date(2010, 1, 1).getTime();
        const offset = cDate - offDate;

        return prefix + parseFloat(String(offset)).toString(16) + this.autoIncrement;
    }

    /**
     * 创建不重复Key
     * @returns {string}
     */
    getKey () {
        // const t  = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        const t = 'xxxxxxxx';

        return t.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;

            return v.toString(16);
        });
    }

    /**
     * 判断属性是否对象自身的，而非原型上的
     * @param {*} obj
     * @param {*} key
     */
    hasOwn (obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    /**
     * 是否 VNode
     * @param node
     * @returns {boolean|boolean|*}
     */
    isVNode (node) {
        return node !== null && typeof node === 'object' && this.hasOwn(node, 'componentOptions');
    }

    /**
     * 替换url中的参数
     * @param {*} url
     * @param {*} arg
     * @param {*} val
     */
    changeUrlArg (url, arg, val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + val;

        return url.match(pattern) ? url.replace(eval('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[?]') ? url + '&' + replaceText : url + '?' + replaceText);
    }

    /**
     * 获取url中指定参数的值
     * @param {*} name
     */
    getQueryString (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = window.location.search.substr(1).match(reg);

        if (r !== null) {
            return unescape(r[2]);
        } return null;
    }

    /**
     * 判断两个元素在页面上是否重叠
     * @param {*} a DOM元素
     * @param {*} b DOM元素
     */
    isCollision (a, b) {
        var ax = a.offsetLeft;
        var ay = a.offsetTop;
        var aw = a.offsetWidth;
        var ah = a.offsetHeight;
        var bx = b.offsetLeft;
        var by = b.offsetTop;
        var bw = b.offsetWidth;
        var bh = b.offsetHeight;

        return (ax + aw > bx && ax < bx + bw && ay + ah > by && ay < by + bh);
    }

    /**
     * param: date(时间磋/时间字符串)
     * str: 格式字符串
     * return 返回格式化后的日期
     */
    formatTime (date, str = 'YYYY-MM-DD hh:mm:ss') {
        date = new Date(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const o = {
            'YYYY': year,
            'MM': this.formatNum(month),
            'DD': this.formatNum(day),
            'hh': this.formatNum(hour),
            'mm': this.formatNum(minute),
            'ss': this.formatNum(second)
        };

        for (let i in o) {
            str = str.replace(i, o[i]);
        }
        return str;
    }

    /**
     * 数字补0，返回字符串
     */
    formatNum (n) {
        n = n.toString();
        return n[1] ? n : '0' + n;
    }

    /**
     * 触发非常频繁的事件合并成一次延迟执行
     */
    debounce (action, delay) {
        var timer = null;

        return function () {
            var args = arguments;

            clearTimeout(timer);
            timer = setTimeout( () => {
                action.apply(this, args)
            }, delay);
        };
    }

    /**
     * 设置一个阀值，在阀值内，把触发的事件合并成一次执行；当到达阀值，必定执行一次事件
     */
    throttle (action, delay) {
        var statTime = 0;

        return function () {
            var currTime = Number(new Date());

            if (currTime - statTime > delay) {
                action.apply(this, arguments);
                statTime = currTime;
            }
        };
    }

    // 计算两个时间之间的倒计时
    computeTime (endtime) {
        try {
            // console.log(start, end)
            let end = new Date(endtime * 1000).getTime();

            let start = new Date().getTime();

            let t = end - start > 0 ? end - start : 0;
            // console.log(new Date(endtime*1000).toLocaleDateString())

            if (t > 0) {
                let d = Math.floor(t / 1000 / 60 / 60 / 24);

                let hour = Math.floor(t / 1000 / 60 / 60 % 24);

                let min = Math.floor(t / 1000 / 60 % 60);

                let sec = Math.floor(t / 1000 % 60);

                let countDownTime = d + ':' + this.formatNum(hour) + ':' + this.formatNum(min) + ':' + this.formatNum(sec);

                return countDownTime;
            }
            return '00:00:00';

        } catch (err) {
            console.error(err);
        }
    }

    /**
     * 清除字符串首尾空格
     * @param {*} str
     */
    trim (str) {
        return str.replace(/(^\s|\s$)/g, '');
    }

    /**
     * 仅限数字数组
     * @param {number} min 最小值
     * @param {number} max   最大值
     */
    createRangeArr (min, max) {
        if (typeof min !== 'number' && typeof max !== 'number') {
            throw new Error('min和max必须是整数数值类型');
        }
        let arr = [];

        for (let i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    /**
     * 获取数据类型
     */
    getType (target) {
        return Object.prototype.toString.call(target).toLowerCase().match(/\w+(?=])/)[0];
    }

    /**
     * 判断两个值是否相等
     * @param {any} a
     * @param {any} b
     */
    eq (a, b) {
        if (this.getType(a) !== this.getType(b)) {
            return false ;
        }
        switch (this.getType(a)) {
        case 'string':
        case 'number':
        case 'undefined':
        case 'null': return a === b;
        case 'object':
        case 'array': return JSON.stringify(a) === JSON.stringify(b);
        default: return false
        }
    }

    on(element, event, handler){
        if (document.addEventListener) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        } else if (element && event && handler) {
            element.attachEvent('on' + event, handler);
        }
    }

    off(element, event, handler){
        if (document.addEventListener) {
            if (element && event && handler) {
                element.removeEventListener(event, handler, false);
            }
        } else if (element && event && handler) {
            element.detachEvent('on' + event, handler);
        }
    }
}

export default new Comm();
