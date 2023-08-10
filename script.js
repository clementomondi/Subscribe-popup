// Add JavaScript code here
function hide() {
    document.getElementById('container-1').className = "hide-div"
}

const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})