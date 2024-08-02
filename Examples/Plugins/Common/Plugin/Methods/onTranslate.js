window.Asc.plugin.onTranslate = function() {
    var label = document.getElementById("button_new");
    if (label)
        label.innerHTML = window.Asc.plugin.tr("New");
}