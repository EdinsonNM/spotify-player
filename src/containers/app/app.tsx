import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "reflect-metadata"

import { PlayLists } from "./components/playlists/playlists";
import "./app.scss";

export default function Root() {

  return(
    <QueryClientProvider client={new QueryClient()}>
      <section className="player-app">
        <PlayLists />
      </section>
    </QueryClientProvider>
  );
}
