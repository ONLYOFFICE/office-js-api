# Select

Selects the current paragraph.

## Syntax

expression.Select();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example selects the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = editor.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var bResult = oParagraph.Select();
if (bResult === true) {
	oParagraph.SetItalic(true);
}
builder.SaveFile("docx", "Select.docx");
builder.CloseFile();
```