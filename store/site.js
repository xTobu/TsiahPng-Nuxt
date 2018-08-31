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
				'/tsiahpng/RestaurantsList'
			)
			.then(response => {
                context.commit('setRestaurantList', response.data.data);
			});
	},
};

export const getters = {};
