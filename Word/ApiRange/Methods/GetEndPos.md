# GetEndPos

Returns the end position of the current range.

## Syntax

expression.GetEndPos();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example gets the end position of a given range object.

```javascript
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
let oRange = oParagraph.GetRange();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We used range in previous paragraph with end position: " + oRange.GetEndPos());
oDocument.Push(oParagraph);
```
