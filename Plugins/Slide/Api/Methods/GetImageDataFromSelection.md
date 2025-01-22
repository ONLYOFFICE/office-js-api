# GetImageDataFromSelection

Returns the image data from the first of the selected drawings. If there are no drawings selected, the method returns a white rectangle.

## Syntax

expression.GetImageDataFromSelection();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ImageData](../../Enumeration/ImageData.md)

## Examples

**Example 1:**

```javascript
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
```
