# SetBold

Sets the bold property to the text character.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies if the Range contents are displayed bold or not. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

This example sets the bold property to the text character.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetBold(true);
```
