# ToJSON

Converts the ApiTextPr object into the JSON object.

## Syntax

expression.ToJSON(bWriteStyles);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | Boolean | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiTextPr object into the JSON object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetFontFamily("Comic Sans MS");
var json = oTextPr.ToJSON(true);
var oTextPrFromJSON = Api.FromJSON(json);
oTextPrFromJSON.SetFontSize(30);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the font size set to 15 points using the text properties.");
oParagraph.SetTextPr(oTextPrFromJSON);
builder.SaveFile("docx", "ToJSON.docx");
builder.CloseFile();
```