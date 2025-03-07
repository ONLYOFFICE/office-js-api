# GetType

Returns the type property of the current user's information.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ProtectedRangeUserType](../../Enumeration/ProtectedRangeUserType.md)

## Example

This example changes the user protected range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userType = userInfo.GetType();
worksheet.GetRange("A3").SetValue("Type: " + userType);
```
