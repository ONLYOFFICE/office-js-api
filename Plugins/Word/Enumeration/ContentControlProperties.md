# ContentControlProperties

The content control properties.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Id | string | A unique identifier of the content control. It can be used to search for a certain content control and make reference to it in the code. |
| Tag | string | A tag assigned to the content control. The same tag can be assigned to several content controls so that it is possible to make reference to them in the code. |
| Lock | [ContentControlLock](../Enumeration/ContentControlLock.md) | A value that defines if it is possible to delete and/or edit the content control or not. |
| InternalId | string | A unique internal identifier of the content control. |
| Alias | string | The alias attribute. |
| PlaceHolderText | string | The content control placeholder text. |
| Appearance | number | Defines if the content control is shown as the bounding box (**1**) or not (**2**). |
| Color | object | The color for the current content control in the RGB format. |
| Color.R | number | Red color component value. |
| Color.G | number | Green color component value. |
| Color.B | number | Blue color component value. |
## Type

Object



## Example

```javascript
let contentControlPr = {
    "Id" : 7,
    "Tag" : "{tag}",
    "Lock" : 0
};
window.Asc.plugin.executeMethod ("AddContentControl", [1, contentControlPr]);
```
