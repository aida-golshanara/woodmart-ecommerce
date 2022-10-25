export default (state, action) => {
    switch (action.type) {
        case "menu":
            return {
                showMenu: action.payload
            };
        default:
            return state;
    }
};
