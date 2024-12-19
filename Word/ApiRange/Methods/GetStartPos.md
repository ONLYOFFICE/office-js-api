# GetStartPos

Returns the start position of the current range.

## Syntax

expression.GetStartPos();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets the start position of a given range object.

```javascript
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
let oRange = oParagraph.GetRange();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We used range in previous paragraph with start position: " + oRange.GetStartPos());
oDocument.Push(oParagraph);
```
