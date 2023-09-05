# ToJSON

Converts the ApiDocument object into the JSON object.

## Syntax

expression.ToJSON(bWriteDefaultTextPr, bWriteDefaultParaPr, bWriteTheme, bWriteSectionPr, bWriteNumberings, bWriteStyles);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteDefaultTextPr | Required | Boolean | Specifies if the default text properties will be written to the JSON object or not. |
| bWriteDefaultParaPr | Required | Boolean | Specifies if the default paragraph properties will be written to the JSON object or not. |
| bWriteTheme | Required | Boolean | Specifies if the document theme will be written to the JSON object or not. |
| bWriteSectionPr | Required | Boolean | Specifies if the document section properties will be written to the JSON object or not. |
| bWriteNumberings | Required | Boolean | Specifies if the document numberings will be written to the JSON object or not. |
| bWriteStyles | Required | Boolean | Specifies if the document styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiDocument object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var json = oDocument.ToJSON(true, true, true, true, true, true);
var oDocumentFromJSON = Api.FromJSON(json);
var oParagraph = oDocumentFromJSON[0];
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing1);
var oDrawing2 = Api.CreateShape("wave", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing2);
var aDrawings = oDocumentFromJSON[0].GetAllShapes();
oParagraph = oDocument.GetElement(0);
oParagraph.AddDrawing(aDrawings[0]);
oParagraph.AddLineBreak();
oParagraph.AddText("This is the first shape from the JSON document.");
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```