# GetElement

Returns an element of the current inline text content control using the position specified.

## Syntax

expression.GetElement(nPos);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position where the element which content we want to get must be located. |

## Returns

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## Example

This example shows how to get an element of the inline text content control using the position specified.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
for (let nPos = 0; nPos < 10; ++nPos) {
	var curRun = Api.CreateRun();
	curRun.AddText("This is text run " + (nPos + 1) + ". ");
	oInlineLvlSdt.AddElement(curRun);
}
var changeRun = oInlineLvlSdt.GetElement(4);
changeRun.SetBold(true);
oParagraph.AddLineBreak();
oParagraph.AddLineBreak();
oParagraph.AddLineBreak();
oParagraph.AddText("We added 10 text runs to the above inline text content control. Then we changed the fifth run, so it is different from the others.");
```
