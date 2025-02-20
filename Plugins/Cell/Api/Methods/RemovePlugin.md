# RemovePlugin

Removes a plugin with the specified GUID.

## Syntax

```javascript
expression.RemovePlugin(guid, backup);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | Required | string |  | The plugin identifier. It must be of the *asc.&#123;UUID&#125;* type. |
| backup | Required | string |  | The plugin backup. This parameter is used when working with the desktop editors. |

## Returns

object

## Example

```javascript editor-xlsx
function removePlugin(backup) {
    if (removeGuid)
        window.Asc.plugin.executeMethod('RemovePlugin', [removeGuid, backup], function(result) {
            postMessage(result);
        });

    removeGuid = null;
};
```
