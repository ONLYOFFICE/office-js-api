# AddTabStop

Adds a tab stop to the current run.

## Syntax

expression.AddTabStop();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example adds a tab stop to the run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. After it three tab stops will be added.");
oRun.AddTabStop();
oRun.AddTabStop();
oRun.AddTabStop();
oRun.AddText("This is the text which starts after the tab stops.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "AddTabStop.docx");
builder.CloseFile();
```