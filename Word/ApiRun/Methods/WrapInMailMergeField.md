# WrapInMailMergeField

Wraps a run in a mail merge field.

## Syntax

expression.WrapInMailMergeField();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example wraps a run in a mail merge field.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Name");
oParagraph.AddElement(oRun);
oRun.WrapInMailMergeField();
oParagraph.AddLineBreak();
oRun = Api.CreateRun();
oRun.AddText("Surname");
oParagraph.AddElement(oRun);
oRun.WrapInMailMergeField();
builder.SaveFile("docx", "WrapInMailMergeField.docx");
builder.CloseFile();
```