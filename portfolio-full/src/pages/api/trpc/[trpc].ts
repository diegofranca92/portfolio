import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "~/env.mjs";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

// Config CORS e endpoints externos
// https://trpc.io/docs/server/adapters/nextjs

// https://trpc.io/docs/v9/merging-routers

// https://codevoweb.com/setup-trpc-server-and-client-in-nextjs-13-app-directory/

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
