# GetIndLeft

Returns the paragraph left side indentation.<br>Inherited From: [ApiParaPr#GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md)

## Syntax

expression.GetIndLeft();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md) &#124; undefined

## Example

This example shows how to get the paragraph left side indentation.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetIndLeft(2880);
var nIndLeft = oParagraph.GetIndLeft();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Left indent: " + nIndLeft);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetIndLeft.docx");
builder.CloseFile();
```