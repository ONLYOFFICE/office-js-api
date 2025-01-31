# GetUserId

Returns the user ID of the comment author.

## Syntax

```javascript
expression.GetUserId();
```

`expression` - A variable that represents a [ApiComment](../ApiComment.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the user ID of the comment author.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
var oRange = oWorksheet.GetRange("A1");
var oComment = oRange.AddComment("This is just a number.");
oWorksheet.GetRange("A3").SetValue("Comment's user Id: ");
oWorksheet.GetRange("B3").SetValue(oComment.GetUserId());
```
