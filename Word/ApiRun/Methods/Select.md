# Select

Selects the current run.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example selects the current run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oRun.Select();
oParagraph.AddLineBreak();
oParagraph.AddText("The text from the first run was selected.");
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();
```