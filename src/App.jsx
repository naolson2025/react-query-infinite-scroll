import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
// import the react-query provider
import { QueryClient, QueryClientProvider } from "react-query";
// import the react-query devtools
import { ReactQueryDevtools } from "react-query/devtools";

// create a client
const queryClient = new QueryClient();

function App() {
  return (
    // wrap the app in the provider
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfinitePeople />
        {/* <InfiniteSpecies /> */}
        {/* add the devtools */}
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
