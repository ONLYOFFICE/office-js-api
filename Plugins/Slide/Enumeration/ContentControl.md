# ContentControl

Content control object.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Tag | string | A tag assigned to the content control. The same tag can be assigned to several content controls so that you can make reference to them in your code. |
| Id | string | A unique content control identifier. It can be used to search for a certain content control and make reference to it in your code. |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | A value that defines if it is possible to delete and/or edit the content control or not. |
| InternalId | string | A unique internal identifier of the content control. It is used for all operations with content controls. |
## Type

Object



## Example

```javascript
let contentControl = {
    "Tag": "Document",
    "Id": 0,
    "Lock": 0,
    "InternalId": "1_713"
};
```
