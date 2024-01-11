function customRender(reactElement,mainContainer){
    const domElement =document.createElement(reactElement.type)
    domElement.innearHTML =reactElement.children
    domElement.setAttribute('herf',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement);

}
const reactElement ={
    type :'a',
    props :{
        href :'https://googole.com',
        target : '_blank'
    },
    children :'click me to visit google'
}
const mainContainer =document.querySelector('#root');

customRender(reactElement,mainContainer)