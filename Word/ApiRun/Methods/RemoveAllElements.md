# RemoveAllElements

Removes all the elements from the current run.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun1 = Api.CreateRun();
oRun1.AddText("This is sample text №1.");
oParagraph.AddElement(oRun1);
var oRun2 = Api.CreateRun();
oRun2.AddText("This is sample text №2.");
oParagraph.AddElement(oRun2);
oRun1.RemoveAllElements();
oParagraph.AddLineBreak();
oParagraph.AddText("The sample text №1 was removed from the document.");
builder.SaveFile("docx", "RemoveAllElements.docx");
builder.CloseFile();
```