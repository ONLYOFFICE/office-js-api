# OnEncryption

Encrypts the document.

## Syntax

```javascript
expression.OnEncryption(obj);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | Required | object |  | The encryption properties. |
| obj.type | Required | string |  | The type of encrypting operation:\ -**generatePassword** - generates a password for the document,\ -**getPasswordByFile** - sends the password when opening the document,\ -**encryptData** - encrypts changes when co-editing,\ -**decryptData** - decrypts changes when co-editing. |
| obj.password | Required | string |  | A string value specifying the password to access the document. |
| obj.data | Required | string |  | Encrypted/decrypted changes. |
| obj.check | Required | boolean |  | Checks if the encryption/decryption operation is successful or not (used only for *encryptData* or *decryptData* types). |
| obj.docinfo | Required | string |  | An unencrypted part of the encrypted file. |
| obj.hash | Required | string |  | A string value specifying a file hash (*sha256* by default). |
| obj.error | Required | string |  | A string value specifying an error that occurs (the "" value means that the operation is successful). |

## Returns

This method doesn't return any data.

## Example

```javascript
window.Asc.plugin.executeMethod ("OnEncryption", [
    {
        "type": "getPasswordByFile",
        "password": "123456",
        "docinfo": "{docinfo}",
        "hash": "sha256"
    }
]);
```
