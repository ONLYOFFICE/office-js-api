# SetStrikeout

Specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.

## Syntax

expression.SetStrikeout(isStrikeout);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | Boolean | Specifies that the contents of the current run are displayed struck through. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies that the contents of the current run are displayed with a single horizontal line through the center of the line.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetStrikeout(true);
oRun.AddText("This is a text run with the text struck out with a single line.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetStrikeout.docx");
builder.CloseFile();
```