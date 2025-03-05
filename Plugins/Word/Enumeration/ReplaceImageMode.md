# ReplaceImageMode

Specifies how to adjust the image object in case of replacing the selected image.

## Type

Enumeration

## Values

- "fill"
- "fit"
- "original"
- "stretch"


## Example

```javascript editor-docx
window.saveImage = function () {
    let imageSrc = imageEditor.toDataURL();
    let editorDimension = imageEditor.getCanvasSize();
    let width = editorDimension.width;
    let height = editorDimension.height;
    let imageData = {
        "src": imageSrc,
        "width": width,
        "height": height,
        "replaceMode": "original"
    };
    window.Asc.plugin.executeMethod ("PutImageDataToSelection", [imageData]);
    window.Asc.plugin.executeCommand("close", "");
};
```
