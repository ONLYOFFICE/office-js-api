# SetStrikeout

Specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.

## Syntax

expression.SetStrikeout(isStrikeout);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | Boolean | Specifies that the contents of the current run are displayed struck through. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetStrikeout(true);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text struck out with a single line.");
builder.SaveFile("docx", "SetStrikeout.docx");
builder.CloseFile();
```