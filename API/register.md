# Registration

Used to register a User.

**URL** : `/api/register`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "username": "[username in plain text (required))]",
    "password": "[password in plain text (required)]",
    "admin": "[is admin? (required, true/false)]",
    
    "email": "[valid email address]",
    "name": "[Real name]",
    "address": "[home address]",
    "phone": "[phone number]",
    "country": "[country]",
    "city": "[city]"
}
```

**Data example**

```json

{
    "username": "lesterlyu",
    "password": "abcd1234",
    "admin": "true",
    
    "email": "lvds2000@gmail.com",
    "name": "Dishu Lyu",
    "phone": "121232323",
    "address": "123 Street",
    "city": "Toronto",
    "country": "Canada"

}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    "non_field_errors": [
        "Unable to login with provided credentials."
    ]
}
```