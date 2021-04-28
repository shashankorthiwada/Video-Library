export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SHOW_VIDEOS":
      return {
        ...state,
        videoList: payload,
      };
    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: state.likedVideos.concat(payload),
      };
    default:
      return { state };
  }
};
