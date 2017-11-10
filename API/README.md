# The Look Webserver Backend APIs

## Open Endpoints

Open endpoints require no token Authentication.

* [Registration (create an account)](register.md) : `POST /api/register/`
* [Authenticate (get a token)](authenticate.md) : `POST /api/authenticate/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Authenticate above.

> Header: ```{"x-access-token": "YOUR_TOKEN_HERE"}```

### Account related

Endpoints for basic account operations, i.e. change password, change home address

* [Get account info](account/get_account.md) : `GET /api/account/`
* [Update account info](account/update_account.md) : `PUT /api/account/`

### User Personal Data related

Each endpoint manipulates or displays information related to the User whose
Token is provided with the request:

* [Get user info](user/get_user.md) : `GET /api/user/`
* [Update user info](user/update_user.md) : `PUT /api/user/`

### Item / Suit related

Endpoints for viewing and manipulating the Accounts that the Authenticated User
has permissions to access.

* [Show Accessible Accounts](accounts/get.md) : `GET /api/accounts/`
* [Create Account](accounts/post.md) : `POST /api/accounts/`
* [Show An Account](accounts/pk/get.md) : `GET /api/accounts/:pk/`
* [Update An Account](accounts/pk/put.md) : `PUT /api/accounts/:pk/`
* [Delete An Account](accounts/pk/delete.md) : `DELETE /api/accounts/:pk/`