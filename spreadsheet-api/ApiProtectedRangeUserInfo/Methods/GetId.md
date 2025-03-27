# GetId

Returns the ID property of the current user's information.

## Syntax

```javascript
expression.GetId();
```

`expression` - A variable that represents a [ApiProtectedRangeUserInfo](../ApiProtectedRangeUserInfo.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example changes the user protected range.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.AddProtectedRange("protectedRange", "$A$1:$B$1").AddUser("userId", "name", "CanView");
let protectedRange = worksheet.GetProtectedRange("protectedRange");
let userInfo = protectedRange.GetUser("userId");
let userId = userInfo.GetId();
worksheet.GetRange("A3").SetValue("Id: " + userId);
```
