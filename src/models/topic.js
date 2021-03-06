export const topic = {
	state: {},
	reducers: {
		setTopic: (state, data) => ({ ...state, data: data}),
		setCategory: (state, category) => ({ ...state, category: category}),
		enableChat: (state, isEnabled) => ({ ...state, isChatEnabled: isEnabled}),
	},
};
