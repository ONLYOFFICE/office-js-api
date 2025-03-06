# GetAllOleObjects

Returns all OLE object data for objects which can be opened by the specified plugin.\nIf *sPluginId* is not defined, this method returns all OLE objects contained in the currrent document.

## Syntax

```javascript
expression.GetAllOleObjects(sPluginId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPluginId | Required | string |  | Plugin identifier. It must be of the *asc.&#123;UUID&#125;* type. |

## Returns

[OLEObjectData](../../Enumeration/OLEObjectData.md)[]

## Example

```javascript
window.Asc.plugin.executeMethod ("GetAllOleObjects", ["asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"], function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_665") {
            this.Asc.plugin.executeMethod ("SelectOleObject", [data[i].InternalId]);
            break;
        }
    }
});
```
