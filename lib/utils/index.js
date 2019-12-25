
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

export function getScrollContainer(dom){
    if (dom && dom.parentNode){
        let parent = dom.parentNode
        if (parent){
            let overflow = document.defaultView.getComputedStyle(parent, '').overflow
            while (['auto','scroll'].indexOf(overflow) < 0){
                parent = parent.parentNode
                overflow = document.defaultView.getComputedStyle(parent, '').overflow
            }
        }
        dom = parent
    }

    return dom
}