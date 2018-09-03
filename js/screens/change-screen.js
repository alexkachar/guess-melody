import {levels} from "../data/data";
import {artistScreen} from "../screens/artist-screen";
import {genreScreen} from "./genre-screen";
import {resultScreen} from "./results-screen";

const MAX_QUESTIONS = 10;

export const changeScreen = (state) => {
  if (state.notes < 0) {
    resultScreen(state);
  } else if (state.time < 0) {
    resultScreen(state);
  } else if (state.level > MAX_QUESTIONS) {
    resultScreen(state);
  } else if (levels[state.level].type === `artist`) {
    artistScreen(state, changeScreen);
  } else if (levels[state.level].type === `genre`) {
    genreScreen(state, changeScreen);
  }
};
