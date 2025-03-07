# SetHidden

Sets the value hiding property. The specified range must span an entire column or row.

## Syntax

```javascript
expression.SetHidden(isHidden);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHidden | Required | boolean |  | Specifies if the values in the current range are hidden or not. |

## Returns

This method doesn't return any data.

## Example

This example sets the value hiding property.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRows("1:3");
range.SetHidden(true);
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let hidden = range.GetHidden();
worksheet.GetRange("A4").SetValue("The values from A1:C1 are hidden: " + hidden);
```
