# Update User Info

Used to register a User.

**URL** : `/api/user/`

**Method** : `PUT`

**Auth required** : YES

**Data constraints (Only provide needed attributes)**

```json
{
    "height": "[height in cm]",
    "skinColor": "[?]",
    "belly": "[?]",
    "shoulderShape": "[?]",
    "legShape": "[?]",
    "legTorsoRatio": "[?]",
    "bodyShape": "[?]",
    "atLength": "[?]",
    "neckType": "[?]"
}
```

**Data example**

```json

{
    "height": 190,
    "skinColor": "[?]",
    "belly": "[?]",
    "shoulderShape": "[?]",
    "legShape": "[?]",
    "legTorsoRatio": "[?]",
    "bodyShape": "[?]",
    "atLength": "[?]",
    "neckType": "[?]"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "success":true
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
