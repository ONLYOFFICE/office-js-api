# GetClassType

Returns a type of the ApiTextPr class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a class type and pastes it into the presentation.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(32);
oTextPr.SetBold(true);
oParagraph.SetTextPr(oTextPr);
oTextPr = oParagraph.GetTextPr();
var sClassType = oTextPr.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();
```