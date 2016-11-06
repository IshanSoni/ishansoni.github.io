function compile() {
        var command = document.getElementById("commands").value;
        if (command.indexOf("showResume();") != -1 || command.indexOf("showresume();") != -1)
            window.open("https://drive.google.com/file/d/0B3r0Oe2IHNPabU95c3U2V2ZRekU/view?usp=sharing", "_blank");

}

function auto_grow(element) {
    element.style.height = "40px";
    element.style.height = (element.scrollHeight)+"px";
}