// SGN your JS code here. If required.
let remColor = document.getElementById("colorSelect");
function removeSelectedOption() {
    let selectedIndex = remColor.selectedIndex;
    if (selectedIndex !== -1) {
        remColor.options[selectedIndex].remove();
    }
}