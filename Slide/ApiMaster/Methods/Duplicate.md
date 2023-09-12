# Duplicate

Creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.

## Syntax

expression.Duplicate(nPos?);

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | Position where the new slide master will be added. Default value is "ApiPresentation.GetMastersCount()". |

## Returns

[ApiMaster](../ApiMaster.md) &#124; null (returns new ApiMaster object that represents the copy of slide master or null if slide master doesn't exist or is not in the presentation)

## Example

This example creates a duplicate of the specified slide master object, adds the new slide master to the slide masters collection.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var nCountBefore = oPresentation.GetMastersCount();
oMaster.Duplicate(1);
var nCountAfter = oPresentation.GetMastersCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters before duplicating: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of masters after duplicating: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "Duplicate.pptx");
builder.CloseFile();
```