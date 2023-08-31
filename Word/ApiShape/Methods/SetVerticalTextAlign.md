# SetVerticalTextAlign

Sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

## Syntax

expression.SetVerticalTextAlign(VerticalAlign);

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| VerticalAlign | Required | [VerticalTextAlign](../../../Enumerations/VerticalTextAlign.md) | The type of the vertical alignment for the shape inner contents. |

## Returns

This method doesn't return any data.

## Example

This example sets the vertical alignment to the shape content where a paragraph or text runs can be inserted.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetContent();
var sClassType = oDrawing.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class Type = " + sClassType);
oDocContent.AddElement(0, oParagraph);
oDrawing.SetVerticalTextAlign("top");
builder.SaveFile("docx", "SetVerticalTextAlign.docx");
builder.CloseFile();
```