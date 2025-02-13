# SetLabel

Adds a string label to the current inline text content control.

## Syntax

```javascript
expression.SetLabel(sLabel);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLabel | Required | string |  | The label which will be added to the current inline text content control. Can be a positive or negative integer from **-2147483647** to **2147483647**. |

## Returns

This method doesn't return any data.

## Example

This example sets a string label to the inline text content control.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a label set to it.");
inlineLvlSdt.SetLabel("2147483647");
inlineLvlSdt.AddElement(run, 0);
let label = inlineLvlSdt.GetLabel();
paragraph = Api.CreateParagraph();
paragraph.AddText("Label: " + label);
doc.Push(paragraph);
```
