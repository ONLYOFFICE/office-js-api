# ReplaceCurrentImage

Replaces the current image with an image specified.

## Syntax

```javascript
expression.ReplaceCurrentImage(sImageUrl, Width, Height);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | Required | string |  | The image source where the image to be inserted should be taken from (currently, only internet URL or Base64 encoded images are supported). |
| Width | Required | [EMU](../../Enumeration/EMU.md) |  | The image width in English measure units. |
| Height | Required | [EMU](../../Enumeration/EMU.md) |  | The image height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example replaces the current image with an image specified.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
drawing.Select();
doc.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
```
