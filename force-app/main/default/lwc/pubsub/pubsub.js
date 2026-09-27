const pubsubList = {};

const subscribe = (eventName, callback) => {
    if (!pubsubList[eventName]) {
        pubsubList[eventName] = [];
    }
    pubsubList[eventName].push(callback);
};

const unsubscribe = (eventName, callback) => {
    if (pubsubList[eventName]) {
        pubsubList[eventName] = pubsubList[eventName].filter(cb => cb !== callback);
    }
};

const fire = (eventName, payload) => {
    if (pubsubList[eventName]) {
        pubsubList[eventName].forEach(callback => {
            try {
                callback(payload);
            } catch (error) {
                console.error(`Error in callback for event ${eventName}:`, error);
            }
        });
    }
}

export {
    subscribe,
    unsubscribe,
    fire
};