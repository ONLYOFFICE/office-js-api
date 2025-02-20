# PutImageDataToSelection

Replaces the first selected drawing with the image specified in the parameters.
If there are no drawings selected, the method inserts the image at the current position.

## Syntax

```javascript
expression.PutImageDataToSelection(oImageData);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oImageData | Required | [ImageData](../../Enumeration/ImageData.md) |  | The information about the base64 encoded *png* image. |

## Returns

This method doesn't return any data.

## Example

```javascript editor-xlsx
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
```
