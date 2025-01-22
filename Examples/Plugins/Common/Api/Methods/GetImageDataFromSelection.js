window.Asc.plugin.executeMethod ("GetImageDataFromSelection", [], function (result) {
    let image = document.createElement("img");
    image.src = result.src;
    image.width = result.width;
    image.height = result.height;
    CreateImageEditor ();
    initializationDone = true;
    var imageHeight = null;
    image.height > 500 ? imageHeight = 500 : imageHeight = image.height;
    window.Asc.plugin.resizeWindow (undefined, undefined, 870, imageHeight + 300, 0, 0);
});