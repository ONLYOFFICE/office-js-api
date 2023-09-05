# RemoveSelection

Removes the current selection.

## Syntax

expression.RemoveSelection();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes the current selection.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api ONLYOFFICE");
var oRange = oDocument.GetRange(0, 2);
oRange.Select();
oDocument.RemoveSelection();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The selection from the word 'Api' was removed.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "RemoveSelection.docx");
builder.CloseFile();
```