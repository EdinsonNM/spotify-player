import { Expose } from "class-transformer"

import { BaseModel } from "./base.model"

export class PlaylistImage extends BaseModel {
    @Expose() height = 0
    @Expose() url = ''
}