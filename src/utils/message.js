 const generateMessage = (text) => {
    return {
        text,
        createdAt: new Date().getTime(),
    };
 };

const generateLocationMessage = (locationLink) => {
    return {
        locationLink,
        createdAt: new Date().getTime(),
    }
};

module.exports = {
    generateMessage: generateMessage,
    generateLocationMessage: generateLocationMessage,
};