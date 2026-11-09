import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const hostIndex = args.indexOf("--host");
const port = portIndex >= 0 ? args[portIndex + 1] : "3000";
const hostname = hostIndex >= 0 ? args[hostIndex + 1] : "0.0.0.0";
const server = spawn(process.execPath, [require.resolve("next/dist/bin/next"), "dev", "--hostname", hostname, "--port", port], { stdio: "inherit" });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => server.kill(signal));
server.on("exit", (code) => process.exit(code ?? 0));
