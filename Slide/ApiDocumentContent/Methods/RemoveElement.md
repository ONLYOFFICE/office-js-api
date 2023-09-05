# RemoveElement

Removes an element using the position specified.

## Syntax

expression.RemoveElement(nPos);

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The element number (position) in the document or inside other element. |

## Returns

This method doesn't return any data.

## Example

This example shows how to remove an element.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is the first paragraph.");
oDocContent.RemoveElement(0);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second paragraph. The first paragraph was removed from the document content.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "RemoveElement.pptx");
builder.CloseFile();
```