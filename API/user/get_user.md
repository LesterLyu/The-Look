# Get User Info

Used to register a User.

**URL** : `/api/user/`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "height": "[190]",
    "weight": "[80]",
    "skinColor": "[?]",
    "belly": "[?]",
    "shoulderShape": "[?]",
    "legShape": "[?]",
    "legTorsoRatio": "[?]",
    "bodyShape": "[?]",
    "atLength": "[?]",
    "neckType": "[?]",
    "gender": "[?]"
}
```

## Error Response

**Condition** : System Error

**Code** : `500 INTERNAL ERROR`

**Content** :

```json
{
    "success":false,
    "msg": "error message"
}
```