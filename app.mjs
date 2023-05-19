import { add, subtract, multiply, divide } from "./math.mjs";
// import { rangeRandomize } from "./utils.mjs";
// import defaultRandomize from "./utils.mjs";
import { rangeRandomize } from "./mainUtils.mjs";
import defaultRandomize from "./mainUtils.mjs";
const log = (txt) => {
  console.log(txt);
};

log(`random: ${defaultRandomize()}`);
log(`range random: ${rangeRandomize(3)}`);
