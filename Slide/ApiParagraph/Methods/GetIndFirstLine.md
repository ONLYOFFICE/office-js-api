# GetIndFirstLine

Returns the paragraph first line indentation.

## Syntax

expression.GetIndFirstLine();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

twips, undefined

## Example

This example shows how to get the paragraph first line indentation.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetIndFirstLine(1440);
oParagraph.AddText("This is the first paragraph with the indent of 1 inch set to the first line. ");
oParagraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
var nIndFirstLine = oParaPr.GetIndFirstLine();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("First line indent: " + nIndFirstLine);
oDocument.Push(oParagraph);
```
