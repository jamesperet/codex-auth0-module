const { auth } = require('express-openid-connect');

class Auth0 {
    
    constructor(server, config){
        this.server = server;
        this.config = config;
        this.module_name = "Auth0 Module";
        this.auth = auth;
    }

    init()
    {
        this.server.express.use(
            this.auth({
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