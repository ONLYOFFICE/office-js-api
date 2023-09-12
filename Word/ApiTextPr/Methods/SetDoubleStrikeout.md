# SetDoubleStrikeout

Specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.

## Syntax

expression.SetDoubleStrikeout(isDoubleStrikeout);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | Required | Boolean | Specifies that the contents of the current run are displayed double struck through. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example specifies that the contents of the run are displayed with two horizontal lines through each character displayed on the line.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetDoubleStrikeout(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text struck out with two lines using the text properties.");
builder.SaveFile("docx", "SetDoubleStrikeout.docx");
builder.CloseFile();
```