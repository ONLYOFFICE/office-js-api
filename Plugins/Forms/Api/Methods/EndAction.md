# EndAction

Specifies the end action for long operations.

## Syntax

expression.EndAction(type, description, status);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | number |  | A value which defines an action type which can take **"Block"** if this is the *BlockInteraction* action or **"Information** if this is the *Information* action. |
| description | Required | string |  | A string value that specifies the description text for the operation end action. |
| status | Required | string |  | The error status code. If no error occurs, then an empty string is passed. |

## Returns

This method doesn't return any data.