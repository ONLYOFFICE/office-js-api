# WrapInMailMergeField

Wraps the paragraph content in a mail merge field.

## Syntax

expression.WrapInMailMergeField();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.
## Example

This example wraps the paragraph content in a mail merge field.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
oParagraph.WrapInMailMergeField();
builder.SaveFile("docx", "WrapInMailMergeField.docx");
builder.CloseFile();
```