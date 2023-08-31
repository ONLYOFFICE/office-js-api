# GetIndFirstLine

Returns the paragraph first line indentation.<br>Inherited From: [ApiParaPr#GetIndFirstLine](../../ApiParaPr/Methods/GetIndFirstLine.md)

## Syntax

expression.GetIndFirstLine();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md) &#124; undefined

## Example

This example shows how to get the paragraph first line indentation.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a paragraph with the indent of 1 inch set to the first line. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetIndFirstLine(1440);
var nIndFirstLine = oParagraph.GetIndFirstLine();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("First line indent: " + nIndFirstLine);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetIndFirstLine.docx");
builder.CloseFile();
```