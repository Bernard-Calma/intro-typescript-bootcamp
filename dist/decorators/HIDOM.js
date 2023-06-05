export function HiDOM(msg, element) {
    return function (constructor) {
        const pageTag = document.querySelector("#root");
        const myCompete = new constructor();
        if (pageTag)
            pageTag.innerHTML = msg + "our admin is " + myCompete.admin;
    };
}
