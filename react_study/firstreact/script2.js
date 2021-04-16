let counter = 0;
let dom = document.querySelector("#root");
let element = React.createElement(
        'p', {},  "Push Here!"
    )
ReactDOM.render(element, dom)

function doCount(){
    counter++;
    let element = React.createElement(
        'p', {},  "count: " + counter
    )
    ReactDOM.render(element, dom)
}