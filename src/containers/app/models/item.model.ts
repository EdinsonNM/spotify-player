import { Expose, Type } from "class-transformer";

import { BaseModel } from "./base.model";
import { PlaylistImage } from "./image.model";

export class PlaylistItem extends BaseModel {
    @Expose() name = "";
    @Expose() @Type(() => PlaylistImage) images: PlaylistImage[] = [];
}