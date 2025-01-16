import getPoll from "./Poll/get.js";
import getPolls from "./Poll/get.polls.js";
const pollController = {
  get: getPoll,
  getAll: getPolls,
};

export default pollController;