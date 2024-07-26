# CreateNumbering

Creates a bullet for a paragraph with the numbering character or symbol specified with the sType parameter.

## Syntax

expression.CreateNumbering(sType, nStartAt);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | BulletType |  | The numbering type the paragraphs will be numbered with. |
| nStartAt | Required | number |  | The number the first numbered paragraph will start with. |

## Returns

ApiBullet