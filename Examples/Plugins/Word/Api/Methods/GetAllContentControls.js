var flagInit = false;
window.Asc.plugin.init = function (text) {
    if (!flagInit) {
        this.executeMethod ("GetAllContentControls", null, function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].Tag == 11) {
                    this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
                    break;
                }
            }
        });
        flagInit = true;
        ...
    }
};