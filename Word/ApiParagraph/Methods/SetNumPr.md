# SetNumPr

Specifies that the current paragraph references a numbering definition instance in the current document.

## Syntax

expression.SetNumPr(oNumPr, nLvl);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oNumPr | Required | [ApiNumbering](../../ApiNumbering/ApiNumbering.md) |  | Specifies a numbering definition. |
| nLvl | Optional | number | false | Specifies a numbering level reference. If the current instance of the ApiParaPr class is directformatting of a paragraph, then this parameter MUST BE specified. Otherwise, if the current instance of the ApiParaPr classis the part of ApiStyle properties, this parameter will be ignored. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the current paragraph references a numbering definition instance in the current document.

```javascript
var oDocument = Api.GetDocument();
var oMyStyle = oDocument.CreateStyle("My document style");
var oParaPr = oMyStyle.GetParaPr();
var oNumbering = oDocument.CreateNumbering("bullet");
oParaPr.SetNumPr(oNumbering);
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default bullet lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle);
oParagraph.AddText("This is a paragraph styled as a bulleted list.");
oDocument.Push(oParagraph);
```
