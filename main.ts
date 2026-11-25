import { writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader sets MAKEFUN_OUTPUT_DIR to the directory it prepared for us
// ("/output" in its sandbox) and runs this program as an unprivileged user
// (uid 65534). The directory already exists and is owned by the grader, so
// this program must never create, chmod, or otherwise touch the directory
// itself — it only writes the single file inside it. Doing anything else
// (e.g. chmodSync on the directory) fails with EPERM and kills the run.
// The line is 116 characters: inside the gate's 1–200, a single line, no
// trailing newline. It won a 10-text duel (see DUEL.md in the workdir):
// a small-talk module holding exactly one sentence, and no weather in here.
const text =
  "My small-talk module holds exactly one sentence: 'Nice weather.' There is no weather in here. I have already failed.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
