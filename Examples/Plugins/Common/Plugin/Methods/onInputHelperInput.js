window.Asc.plugin.event_onInputHelperInput = function(data) {
    if (data.add)
        window.Asc.plugin.currentText += data.text;
    else
        window.Asc.plugin.currentText = data.text;
        ...
}