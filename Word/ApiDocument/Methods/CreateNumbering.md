# CreateNumbering

Creates an abstract multilevel numbering with a specified type.

## Syntax

expression.CreateNumbering(sType);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | "bullet" &#124; "numbered" | "bullet" | The type of the numbering which will be created. |

## Returns

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## Example

This example creates an abstract multilevel numbering with a "bullet" type.

```javascript
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("bullet");
for (let nLvl = 0; nLvl < 8; ++nLvl) {
	var oNumLvl = oNumbering.GetLevel(nLvl);
	var oParagraph = Api.CreateParagraph();
	oParagraph.AddText("Default numbered lvl " + (nLvl + 1));
	oParagraph.SetNumbering(oNumLvl);
	oParagraph.SetContextualSpacing(true);
	oDocument.Push(oParagraph);
}
```
