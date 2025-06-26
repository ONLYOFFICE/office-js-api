# ContentControl

Content control object.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Id | string | A unique identifier of the content control. It can be used to search for a certain content control and make reference to it in the code. |
| InternalId | string | A unique internal identifier of the content control. It is used for all operations with content controls. |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | A value that defines if it is possible to delete and/or edit the content control or not: 0 - only deleting, 1 - no deleting or editing, 2 - only editing, 3 - full access. |
| Tag | string | A tag assigned to the content control. The same tag can be assigned to several content controls so that it is possible to make reference to them in your code. |
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
