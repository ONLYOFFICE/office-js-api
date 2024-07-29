# GetClassType

Returns a type of the ApiSection class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"section"

## Example

This example gets a class type and inserts it into the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(720, 720, 720, 720);
oSection.SetPageSize(7200, 4320);
var sClassType = oSection.GetClassType();
oParagraph.AddText("Class Type = " + sClassType);
```
