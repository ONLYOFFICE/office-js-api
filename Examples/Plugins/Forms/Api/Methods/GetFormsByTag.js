window.Asc.plugin.executeMethod ("GetFormsByTag", ["{tag}"], function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_556") {
            this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
            break;
        }
    }
});