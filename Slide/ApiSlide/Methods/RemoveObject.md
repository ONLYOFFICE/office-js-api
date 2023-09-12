# RemoveObject

Removes objects (image, shape or chart) from the current slide.

## Syntax

expression.RemoveObject(nPos, nCount?);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | Position from which the object will be deleted. |
| nCount | Optional | Number | The number of elements to delete. Default label is "1". |

## Returns

Boolean (returns false if slide doesn't exist)

## Example

This example removes objects (image, shape or chart) from the current slide.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oDrawing.SetPosition(30 * 36000, 1267200);
oDrawing.SetSize(150 * 36000, 130 * 36000);
var oCopyDrawing = oDrawing.Copy();
oCopyDrawing.SetPosition(170 * 36000, 1267200);
oCopyDrawing.SetSize(150 * 36000, 130 * 36000);
oSlide.AddObject(oDrawing);
oSlide.AddObject(oCopyDrawing);
oSlide.RemoveObject(1, 1);
builder.SaveFile("pptx", "RemoveObject.pptx");
builder.CloseFile();
```