export = {
    sessionStore: {
        get(key) {
            console.info(key);
        },

        set(key, value, maxAge) {
            console.info(key);
        },

        destroy(key) {
            console.info(key);
        }
    }
};
