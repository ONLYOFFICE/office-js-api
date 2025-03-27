# GetTimeUTC

Returns the timestamp of the comment creation in UTC format.

## Syntax

```javascript
expression.GetTimeUTC();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the timestamp of the comment creation in UTC format.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Timestamp UTC: ");
worksheet.GetRange("B3").SetValue(comment.GetTimeUTC());
```
