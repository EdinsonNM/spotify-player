import React from "react";
import { PlaylistCard } from "@ps/styleguide";

import { usePlaylists } from "../../hooks/use-playlists";
import "./playlists.scss";

export const PlayLists = () => {
  const { isFetching, isSuccess, data } = usePlaylists();
  const playlists = data?.items;

  if (!playlists) {
    return null;
  }

  return (
    <div className="player__playlists">
      {playlists.map((playlist) => (
        <PlaylistCard title={playlist.name} photo={playlist.images[0]?.url} />
      ))}
    </div>
  );
};
