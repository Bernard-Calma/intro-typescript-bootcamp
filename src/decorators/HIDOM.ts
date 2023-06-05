export function HiDOM(msg: string, element: string){
    // console.log("Hello")
    return function(constructor: any) {
        const pageTag = document.querySelector("#root");
        const myCompete = new constructor();
        if (pageTag) pageTag.innerHTML = msg + "our admin is " + myCompete.admin
        // console.log("Hello", msg)
    }
}