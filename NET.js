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
