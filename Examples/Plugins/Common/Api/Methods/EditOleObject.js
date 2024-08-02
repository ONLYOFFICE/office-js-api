var _param = {
    "data": "{data}",
    "imgSrc": "https://link-to-the-image.jpg",
    "objectId": "5_556",
    "width": 70,
    "height": 70,
    "widthPix": 60 * 36000,
    "heightPix": 60 * 36000
};
window.Asc.plugin.executeMethod ("EditOleObject", [_param], function () {
    window.Asc.plugin.executeCommand ("close", "");
});