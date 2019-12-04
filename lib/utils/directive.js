
export const appendToBody = {
    inserted: (el, binding) => {
        if (el && el.parentNode){
            document.body.appendChild(el)
        }
    }
}