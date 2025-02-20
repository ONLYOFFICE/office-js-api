# RemoveObject

Removes objects (image, shape or chart) from the current slide layout.

## Syntax

```javascript
expression.RemoveObject(nPos, nCount);
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Position from which the object will be deleted. |
| nCount | Optional | number | true | The number of elements to delete. |

## Returns

boolean

## Example

This example shows how to remove objects from a slide layout.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("cube", 3212465, 963295, oFill, oStroke);
oDrawing.SetPosition(30 * 36000, 1267200);
oDrawing.SetSize(150 * 36000, 130 * 36000);
var oCopyDrawing = oDrawing.Copy();
oCopyDrawing.SetPosition(160 * 36000, 1267200);
oCopyDrawing.SetSize(150 * 36000, 130 * 36000);
oLayout.AddObject(oDrawing);
oLayout.AddObject(oCopyDrawing);
oLayout.RemoveObject(1, 1);
var oDocContent = oDrawing.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("The second cube was removed from this layout.");
```
