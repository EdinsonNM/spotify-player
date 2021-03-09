import { useQuery } from "react-query";
import { PlaylistResponse } from "../models/playlist.model";
import { PlaylistRepository } from "../repository/playlist.repository";

export function usePlaylists() {
    const { isFetching, isSuccess, data } = useQuery<PlaylistResponse>(
        'playlists',
        () => 
            PlaylistRepository.getPlaylists(),
            { refetchOnWindowFocus: false}
        )

    return { isFetching, isSuccess, data }
}