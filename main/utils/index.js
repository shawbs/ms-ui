
export function on(element, event, handler){
    if (document.addEventListener) {
        if (element && event && handler) {
            element.addEventListener(event, handler, false);
        }
    } else if (element && event && handler) {
        element.attachEvent('on' + event, handler);
    }
}

export function off(element, event, handler){
    if (document.addEventListener) {
        if (element && event && handler) {
            element.removeEventListener(event, handler, false);
        }
    } else if (element && event && handler) {
        element.detachEvent('on' + event, handler);
    }
}

export function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}
/**
 * 触发非常频繁的事件合并成一次延迟执行
 */
export function debounce(action, delay) {
    var timer = null

    return function() {
        var self = this;
        var args = arguments

        clearTimeout(timer)
        timer = setTimeout(function() {
            action.apply(self, args)
        }, delay)
    }
}

/**
 * 设置一个阀值，在阀值内，把触发的事件合并成一次执行；当到达阀值，必定执行一次事件
 */
export function throttle(action, delay) {
    var statTime = 0

    return function() {
        var currTime = Number(new Date())

        if (currTime - statTime > delay) {
            action.apply(this, arguments)
            statTime = currTime
        }
    }
}

