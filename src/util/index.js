export const saveState = (state) => {
    try {
        const jsonState = JSON.stringify(state);
        localStorage.setItem('state', jsonState)
    } catch (e) {
        // ignore
    }
}

export const loadState = () => {
    try {
        const state = localStorage.getItem('state')
        if (state == null) {
            return undefined;
        }
        return JSON.parse(state)
    } catch (e) {
        return undefined
    }
}
