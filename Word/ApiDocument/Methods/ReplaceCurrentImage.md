# ReplaceCurrentImage

Replaces the current image with an image specified.

## Syntax

expression.ReplaceCurrentImage(sImageUrl, Width, Height);

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
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oDrawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
oParagraph.AddDrawing(oDrawing);
oDrawing.Select();
oDocument.ReplaceCurrentImage("https://helpcenter.onlyoffice.com/images/Help/GettingStarted/Documents/big/EditDocument.png", 60 * 36000, 35 * 36000);
```
