window.Asc.plugin.executeMethod ("GetImageDataFromSelection", [], function (oResult) {
    oImage = document.createElement ("img");
    oImage.src = oResult.src;
    oImage.width = oResult.width;
    oImage.height = oResult.height;
    CreateImageEditor ();
    initializationDone = true;
    var imageHeight = null;
    oImage.height > 500 ? imageHeight = 500 : imageHeight = oImage.height;
    window.Asc.plugin.resizeWindow (undefined, undefined, 870, imageHeight + 300, 0, 0);
});