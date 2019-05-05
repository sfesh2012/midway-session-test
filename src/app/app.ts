import { Application } from 'midway';
class AppBootHook {
    private app;
    private sessionMem = {};

    public constructor(app: Application) {
        this.app = app;
    }

    public async willReady() {
        const sessionMem = this.sessionMem;
        this.app.sessionStore = {
            // support promise / async
            get(key) {
                console.info(key);
                return sessionMem[key];
            },
            set(key, value, maxAge) {
                // console.info(key, value);
                // set key to store
                console.info(key, value);
                sessionMem[key] = value;
            },
            destroy(key) {
                delete sessionMem[key];
                // destroy key
            },
        };
    }
}

module.exports = AppBootHook;