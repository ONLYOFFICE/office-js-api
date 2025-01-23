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
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
for (let i = 0; i < 10; ++i) {
	let run = Api.CreateRun();
	run.AddText("This is text run " + (i + 1) + ". ");
	inlineLvlSdt.AddElement(run);
}
let changeRun = inlineLvlSdt.GetElement(4);
changeRun.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddLineBreak();
paragraph.AddText("We added 10 text runs to the above inline text content control. Then we changed the fifth run, so it is different from the others.");
```
