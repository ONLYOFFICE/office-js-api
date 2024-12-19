# Copy

Creates a copy of an block content control. Ignores comments, footnote references, complex fields.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## Example

This example creates a copy of an block level content control.

```javascript
let oDocument = Api.GetDocument();
let oParagraph = oDocument.GetElement(0);
let oBlockLvlSdt = Api.CreateBlockLvlSdt();
let oPara = oBlockLvlSdt.GetContent().GetElement(0);
oPara.AddText("This is an block level content control.");
oDocument.Push(oBlockLvlSdt);
let oCopyBlockLvlSdt = oBlockLvlSdt.Copy();
oDocument.Push(oCopyBlockLvlSdt);
```
