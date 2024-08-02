window.Asc.plugin.executeMethod ("GetAllOleObjects", ["asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"], function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_665") {
            this.Asc.plugin.executeMethod ("SelectOleObject", [data[i].InternalId]);
            break;
        }
    }
});