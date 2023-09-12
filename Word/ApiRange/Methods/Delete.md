# Delete

Deletes all the contents from the current range.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if range is empty)

## Example

This example deletes all the contents from the range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE delete text Document Builder");
var oRange = oDocument.GetRange(10, 21);
oRange.Delete();
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();
```