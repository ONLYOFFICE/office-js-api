# Delete

Deletes the current paragraph.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if paragraph haven't parent)

## Example

This example deletes the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oParagraph1.AddText("This is just a sample paragraph №1.");
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is just a sample paragraph №2.");
oDocument.Push(oParagraph2);
oParagraph1.Delete();
oParagraph2.AddLineBreak();
oParagraph2.AddText("The sample paragraph №1 was removed.");
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();
```