# GetClassType

Returns a type of the ApiHyperlink class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"hyperlink"

## Example

This example gets a class type and inserts it into the document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var sClassType = oHyperlink.GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + sClassType);
oDocument.Push(oParagraph);
```
