import Vue from 'vue';

export const state = () => ({
	RestaurantsList: [],
});

// commit
export const mutations = {
	setRestaurantList(state, res) {
        state.RestaurantsList = res;
    },
    
};

// dispatch
export const actions = {
	getRestaurantList(context) {
		this.$axios
			.get(
				'https://easy-mock.com/mock/5b45cffb43b7ef2c8bf92b96/RestaurantsList'
			)
			.then(response => {
				context.commit('setRestaurantList', response.data);
			});
	},
};

export const getters = {};
