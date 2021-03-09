import { Expose, Type } from "class-transformer";

import { BaseModel } from "./base.model";
import { PlaylistItem } from "./item.model";

export class PlaylistResponse extends BaseModel {
    @Expose() @Type(() => PlaylistItem) items: PlaylistItem[] = []
}