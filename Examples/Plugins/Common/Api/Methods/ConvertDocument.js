let info = "";
window.Asc.plugin.executeMethod ("ConvertDocument", ["markdown", false, false, true, false], function (output) {
    document.getElementById ("text-area").value = info + output;
});