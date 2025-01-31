# RemoveLayout

Removes the layouts from the current slide master.

## Syntax

```javascript
expression.RemoveLayout(nPos, nCount);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Position from which a layout will be deleted. |
| nCount | Optional | number | true | Number of layouts to delete. |

## Returns

boolean

## Example

This example removes the layouts from the current slide master.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oMaster.GetLayoutsCount();
oMaster.RemoveLayout(0, 2);
var nCountAfter = oMaster.GetLayoutsCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of layouts before deletion: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of layouts after deletion: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
```
