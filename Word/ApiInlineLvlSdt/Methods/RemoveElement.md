# RemoveElement

Removes an element using the position specified from the current inline text content control.

## Syntax

expression.RemoveElement(nPos);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The position of the element which we want to remove from the current inline text content control. |

## Returns

boolean

## Example

This example removes an element using the position specified from the inline text content control.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run1 = Api.CreateRun();
run1.AddText("This is the first text run in the inline text content control.");
inlineLvlSdt.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText("This is the second text run in the inline text content control. The first text run was removed.");
inlineLvlSdt.AddElement(run2, 1);
inlineLvlSdt.RemoveElement(0);
```
