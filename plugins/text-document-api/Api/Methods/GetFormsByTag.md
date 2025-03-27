# GetFormsByTag

Returns information about all the forms that have been added to the document with specified tag.

## Syntax

```javascript
expression.GetFormsByTag(tag);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| tag | Required | string |  | The form tag. |

## Returns

[ContentControl](../../Enumeration/ContentControl.md)[]

## Example

```javascript
window.Asc.plugin.executeMethod ("GetFormsByTag", ["{tag}"], function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_556") {
            this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
            break;
        }
    }
});
```
