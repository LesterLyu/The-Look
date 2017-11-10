# Update User Info

Used to register a User.

**URL** : `/api/user/`

**Method** : `PUT`

**Auth required** : YES

**Data constraints (Only provide needed attributes)**

```json
{
    "height": "[height in cm]",
    "weight": "[weight in kg]",
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

**Data example**

```json

{
    "height": 190,
    "weight": 80,
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
    "success":false
}
```