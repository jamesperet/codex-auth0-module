# Codex Auth0 Module

This module adds [Auth0](https://auth0.com/) support to the [jamesperet/codex-server](https://github.com/jamesperet/codex-server).

Example config:

```json
{
    "modules" : [
        {
            "name" : "codex-auth0-module",
            "module" : "../codex-auth0-module/auth0.js",
            "data"   : {
                "issuer_base_url" : "https://dev-c28uur5g.us.auth0.com",
                "client_id"       : "i5Ab6ixW0K3RlKpxcZ3KXQtKwZQRqROh",
                "base_url"        : "http://localhost:3000",
                "secret"          : "dLU1sLC_-mq9ZFWRFMPLDomNrZo02xycmB2hbSUPCcztFTW3Dshb2GcqFOEwdWFo"
            }
        }
    ]
}
```