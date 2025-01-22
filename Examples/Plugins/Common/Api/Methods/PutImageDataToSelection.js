window.saveImage = function () {
    let imageSrc = imageEditor.toDataURL ();
    let editorDimension = imageEditor.getCanvasSize ();
    let width = editorDimension.width;
    let height = editorDimension.height;
    let imageData = {
        "src": imageSrc,
        "width": width,
        "height": height
    };
    window.Asc.plugin.executeMethod ("PutImageDataToSelection", [imageData]);
    window.Asc.plugin.executeCommand ("close", "");
};