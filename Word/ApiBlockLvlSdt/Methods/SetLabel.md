# SetLabel

Sets the label attribute to the current container.

## Syntax

```javascript
expression.SetLabel(sLabel);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLabel | Required | string |  | The label which will be added to the current container. Can be a positive or negative integer from **-2147483647** to **2147483647**. |

## Returns

This method doesn't return any data.

## Example

This example sets the label attribute to the container.

```javascript editor-docx
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a label set to it.");
blockLvlSdt.SetLabel("2147483647");
doc.AddElement(0, blockLvlSdt);
let label = blockLvlSdt.GetLabel();
let paragraph = doc.GetElement(1);
paragraph.AddText("Label: " + label);
```
