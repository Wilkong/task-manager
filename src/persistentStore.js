export const loadState = () => {
    try {
        const loadedState = localStorage.getItem('tasks');
        if(loadedState === null) {
            return undefined;
        }
        const state = JSON.parse(loadedState);

        return state;
    } catch (Error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try{
        localStorage.setItem('tasks', JSON.stringify(state));
    } catch (Error) {
        //TODO: logging
    }
}