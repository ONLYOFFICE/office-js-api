# Select

Sets the selection to the specified range.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example sets the selection to the specified range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oParagraph.GetRange(0, 9);
oRange.Select();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The word 'ONLYOFFICE' was just selected.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();
```