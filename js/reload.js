function reload () {
    document.getElementById("box").innerHTML = document.getElementById("textID").value;
    document.getElementById("box").style.color = document.getElementById("colorID").value;
    document.getElementById("line").innerHTML = "&lt;script type='text/javascript' src='http://hexicle.com/discord-widget/widget.js' link='"+document.getElementById("linkID").value+"' text='"+document.getElementById("textID").value+"' color='"+document.getElementById("colorID").value+ "'&gt;&lt;/script&gt";
}