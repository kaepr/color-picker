import { useEffect, useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";

import CardArea from "./components/CardArea";

const ADMIN_SECRET =
  "hiGVKfA41tKKiAm65rOmxpDge0XsAvLRj6TOjM923yUXfL5rf1QvdpQIG7HNgwC0";

function App() {
  const [client, setClient] = useState();

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage)
      });
      setClient(
        new ApolloClient({
          link: new WebSocketLink({
            uri: "wss://upward-shad-46.hasura.app/v1/graphql",
            options: {
              reconnect: true,
              lazy: true,
              connectionParams: {
                headers: {
                  "content-type": "application/json",
                  "x-hasura-admin-secret": ADMIN_SECRET
                }
              }
            }
          }),
          cache,
          connectToDevTools: true
        })
      );
    }

    init().catch(console.error);
    // console.log(client);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-700 min-h-screen absolute w-full">
        <div className="p-8 rounded-md">
          <CardArea />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
