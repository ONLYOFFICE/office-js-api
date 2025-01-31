# SetBold

Sets the bold property to the text character.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies that the contents of the run are displayed bold. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the bold property to the text character.

```javascript
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetBold(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font weight set to bold using the text properties.");
```
