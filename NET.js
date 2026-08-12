SUS = {
  mode: "neutral",
  can: ["zeigen", "durchlassen", "vektorisieren"],
  cannot: ["erzwingen", "binden", "verändern"]
}
// NET.js
import { SUS } from "./SUS.js";

NET.modules.push(SUS);

NET.route = function(vec) {
  return SUS.run(vec);
};
// NET.js – vervollständigt

import { SUS } from "./SUS.js";
import { SUS_load } from "./SUS.load";
import { SUS_save } from "./SUS.save";
import { SUS_shiftVEC } from "./SUS.shiftVEC";
import { SUS_list } from "./SUS.list";
import { SUS_scanRESPO } from "./SUS.scanRESPO";
import { EYE } from "./EYE.js";

export const NET = {
  modules: [SUS, EYE],

  run(vec) {
    return SUS.run(vec);
  },

  load(respo) {
    return SUS_load(respo);
  },

  save(memory) {
    return SUS_save(memory);
  },

  shiftVEC(state) {
    return SUS_shiftVEC(state);
  },

  list(memory) {
    return SUS_list(memory);
  },

  respo(respo) {
    return SUS_scanRESPO(respo);
  },

  eye(respo) {
    return EYE.view(respo);
  }
};
