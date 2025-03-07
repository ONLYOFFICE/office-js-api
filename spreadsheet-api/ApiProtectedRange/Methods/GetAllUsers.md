# GetAllUsers

Returns all users from the current protected range.

## Syntax

```javascript
expression.GetAllUsers();
```

`expression` - A variable that represents a [ApiProtectedRange](../ApiProtectedRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiProtectedRangeUserInfo](../../ApiProtectedRangeUserInfo/ApiProtectedRangeUserInfo.md)[] \| null

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
worksheet.AddProtectedRange("Protected range", "$A$1:$C$1");
let protectedRange = worksheet.GetProtectedRange("Protected range");
protectedRange.AddUser("uid-1", "John Smith", "CanEdit");
protectedRange.AddUser("uid-2", "Mark Potato", "CanView");
let users = protectedRange.GetAllUsers();
worksheet.GetRange("A3").SetValue(users[0].GetName());

```
