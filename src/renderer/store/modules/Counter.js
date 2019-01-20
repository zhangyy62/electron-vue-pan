const state = {
    main: 0
};

const mutations = {
    DECREMENT_MAIN_COUNTER(statePass) {
        const innerState = statePass;
        innerState.main -= 1;
    },
    INCREMENT_MAIN_COUNTER(statePass) {
        const innerState = statePass;
        innerState.main += 1;
    }
};

const actions = {
    someAsyncTask({ commit }) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER');
    }
};

export default {
    state,
    mutations,
    actions
};
