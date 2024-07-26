# Push

Adds an element to the current paragraph.

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | ParagraphContent |  | The document element which will be added at the current position. Returns false if theoElement type is not supported by a paragraph. |

## Returns

boolean

## Example

This example adds a oRun to the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is run #0, you must not push it to take effect.");
oParagraph.AddElement(oRun);
oParagraph.AddLineBreak();
for (let nRunIncrease = 0; nRunIncrease < 5; ++nRunIncrease) {
	oRun = Api.CreateRun();
	oRun.AddText("This is run #" + (nRunIncrease + 1) + ", you must push it to take effect.");
	oParagraph.AddLineBreak();
	oParagraph.Push(oRun);
}
```
