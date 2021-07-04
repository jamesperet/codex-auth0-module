const { auth, requiresAuth } = require('express-openid-connect');

class Auth0 {
    
    constructor(server, config){
        this.server = server;
        this.config = config;
        this.module_name = "Auth0 Module";
        this.auth = auth;
        this.requiresAuth = requiresAuth;
        server.auth = requiresAuth;
    }

    init()
    {
        this.server.express.use(
            this.auth({
              authRequired: false,
              auth0Logout : true,
              issuerBaseURL: this.config.data.issuer_base_url,
              baseURL: this.config.data.base_url,
              clientID: this.config.data.client_id,
              secret: this.config.data.secret,
              idpLogout: true,
            })
          );
    }  

    run(){}
}

module.exports = Auth0;