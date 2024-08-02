var sInfo = "";
window.Asc.plugin.executeMethod ("ConvertDocument", ["markdown", false, false, true, false], function (sOutput) {
    document.getElementById ("text-area").value = sInfo + sOutput;
});