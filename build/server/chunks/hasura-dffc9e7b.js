import { createClient, dedupExchange, cacheExchange, fetchExchange } from "@urql/core";
const urlT = "http://200.126.13.221:8080/v1/graphql";
const secret = "perc";
const getClient = (url = urlT) => {
  const gqlClient = createClient({
    url,
    exchanges: [dedupExchange, cacheExchange, fetchExchange],
    fetchOptions: () => {
      return {
        headers: { "x-hasura-admin-secret": secret }
      };
    }
  });
  return gqlClient;
};
export { getClient as g };
