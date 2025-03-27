# GetImageDataFromSelection

Returns the image data from the first of the selected drawings. If there are no drawings selected, the method returns a white rectangle.

## Syntax

```javascript
expression.GetImageDataFromSelection();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ImageData](../../Enumeration/ImageData.md)

## Example

```javascript
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
```
