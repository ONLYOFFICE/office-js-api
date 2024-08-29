# SetLock

Sets the lock to the current block text content control:
**"contentLocked"** - content cannot be edited.
**"sdtContentLocked"** - content cannot be edited and the container cannot be deleted.
**"sdtLocked"** - the container cannot be deleted.

## Syntax

expression.SetLock(sLockType);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLockType | Required | "contentLocked" &#124; "sdtContentLocked" &#124; "sdtLocked" |  | The type of the lock applied to the block text content control. |

## Returns

This method doesn't return any data.

## Example

This example sets the lock to the block text content control.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
oBlockLvlSdt.SetLock("sdtContentLocked");
oDocument.AddElement(0, oBlockLvlSdt);
var oLock = oBlockLvlSdt.GetLock();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Lock type: " + oLock);
```
