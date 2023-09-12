# Delete

Deletes the specified object from the parent slide master if it exists.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (return false if parent slide master doesn't exist)

## Example

This example shows how to delete the specified object from the parent slide master if it exists.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oMaster.GetLayoutsCount();
var oLayout = oMaster.GetLayout(0);
oLayout.Delete();
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
builder.SaveFile("pptx", "Delete.pptx");
builder.CloseFile();
```