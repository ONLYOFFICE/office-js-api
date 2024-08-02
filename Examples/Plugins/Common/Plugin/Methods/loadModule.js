window.Asc.plugin.loadModule("./vendor/highlight/styles/" + e.params.data.id , function(content) {
    var style_value = content;
    if (isDE || isFF) {
        $("#jq_color").spectrum("set", (hexc($(container).css('backgroundColor'))));
    } else {
        background_color.value = hexc($(container).css('backgroundColor'));
    }
});