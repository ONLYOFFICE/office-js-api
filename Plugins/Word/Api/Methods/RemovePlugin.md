# RemovePlugin

Removes a plugin with the specified GUID.

## Syntax

expression.RemovePlugin(guid, backup);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | Required | string |  | The plugin identifier. It must be of the *asc.&#123;UUID&#125;* type. |
| backup | Required | string |  | The plugin backup. This parameter is used when working with the desktop editors. |

## Returns

object

## Example

```javascript
function removePlugin(backup) &#123;
    if (removeGuid)
        window.Asc.plugin.executeMethod('RemovePlugin', [removeGuid, backup], function(result) &#123;
            postMessage(result);
        &#125;);

    removeGuid = null;
&#125;;
