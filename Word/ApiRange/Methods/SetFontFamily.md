# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | Required | string |  | The font family or families used for the current text Range. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) | null

## Example

This example sets all 4 font slots with the specified font family.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
let range = doc.GetRange(22, 71);
range.SetFontFamily("Consolas");
```
