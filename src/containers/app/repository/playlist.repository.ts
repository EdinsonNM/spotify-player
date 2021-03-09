import { PlaylistResponse  } from "../models/playlist.model";

export class PlaylistRepository {
    static getPlaylists(): Promise<PlaylistResponse> {
        const endpoint = 'https://api.spotify.com/v1/me/playlists'
        const accessToken = localStorage.getItem('token').trim()
        const headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
        console.log(headers)
        return fetch(endpoint, {
            method: 'GET',
            headers
        })
        .then(res => res.json())
        .then(data => PlaylistResponse.fromJson(data))
    }
}