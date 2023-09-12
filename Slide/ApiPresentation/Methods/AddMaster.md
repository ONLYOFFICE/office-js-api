# AddMaster

Adds the slide master to the presentation slide masters collection.

## Syntax

expression.AddMaster(nPos?, oApiMaster);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Optional | Number | The position where the Master will be added. Default value is "ApiPresentation.GetMastersCount()". |
| oApiMaster | Required | [ApiMaster](../../ApiMaster/ApiMaster.md) | The slide master to be added. |

## Returns

Boolean (return false if position is invalid or oApiMaster doesn't exist)

## Example

This example adds the slide master to the presentation slide masters collection.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = Api.CreateMaster();
var nCountBefore = oPresentation.GetMastersCount();
oPresentation.AddMaster(nCountBefore, oMaster);
var nCountAfter = oPresentation.GetMastersCount();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("Number of masters before adding new master: " + nCountBefore);
oParagraph.AddLineBreak();
oParagraph.AddText("Number of masters after adding new master: " + nCountAfter);
oSlide.RemoveAllObjects();
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "AddMaster.pptx");
builder.CloseFile();
```