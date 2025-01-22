# PutImageDataToSelection

Replaces the first selected drawing with the image specified in the parameters.If there are no drawings selected, the method inserts the image at the current position.

## Syntax

expression.PutImageDataToSelection(oImageData);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oImageData | Required | [ImageData](../../Enumeration/ImageData.md) |  | The information about the base64 encoded *png* image. |

## Returns

This method doesn't return any data.

## Example

```javascript
window.saveImage = function () {
    let sImageSrc = imageEditor.toDataURL ();
    let editorDimension = imageEditor.getCanvasSize ();
    let nWidth = editorDimension.width;
    let nHeight = editorDimension.height;
    let oImageData = {
        "src": sImageSrc,
        "width": nWidth,
        "height": nHeight
    };
    window.Asc.plugin.executeMethod ("PutImageDataToSelection", [oImageData]);
    window.Asc.plugin.executeCommand ("close", "");
};
```
