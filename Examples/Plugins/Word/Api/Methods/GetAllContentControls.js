window.Asc.plugin.init = function () {
    window.Asc.plugin.executeMethod("GetAllContentControls", null, function (controls) {
        for (var i = 0; i < controls.length; i++) {
            if (controls[i].Tag === "{tag}") {
                window.Asc.plugin.executeMethod("SelectContentControl", [controls[i].InternalId]);
                break;
            }
        }
    });
};