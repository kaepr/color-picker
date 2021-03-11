import { hexGenerator, hexToRGB } from "./utils/colorGenerator";

import CardArea from "./components/CardArea";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://upward-shad-46.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        lazy: true,
        connectionParams: {
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret":
              "hiGVKfA41tKKiAm65rOmxpDge0XsAvLRj6TOjM923yUXfL5rf1QvdpQIG7HNgwC0"
          }
        }
      }
    }),
    cache: new InMemoryCache()
  });
};

function App() {
  const client = createApolloClient();

  const hexCode = hexGenerator();
  console.log(hexCode);
  console.log(hexToRGB(hexCode));

  let styles = {
    backgroundColor: hexCode
  };

  return (
    <ApolloProvider client={client}>
      <div className="bg-gray-50 h-screen absolute w-full">
        <div className="mt-10 mr-20 ml-20 mb-10">
          <CardArea />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
