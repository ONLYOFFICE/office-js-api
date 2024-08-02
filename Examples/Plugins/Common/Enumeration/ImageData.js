window.saveImage = function () {
    let sImageSrc = imageEditor.toDataURL();
    let editorDimension = imageEditor.getCanvasSize();
    let nWidth = editorDimension.width;
    let nHeight = editorDimension.height;
    let oImageData = {
        "src": sImageSrc,
        "width": nWidth,
        "height": nHeight,
        "replaceMode": "original"
    };
    window.Asc.plugin.executeMethod ("PutImageDataToSelection", [oImageData]);
    window.Asc.plugin.callCommand("close", "");
};