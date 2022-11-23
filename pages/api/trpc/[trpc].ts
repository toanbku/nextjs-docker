import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/routes/_app";
// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
