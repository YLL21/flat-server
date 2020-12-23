import { Column, Entity, Index } from "typeorm";
import { Content } from "../Content";

@Entity({
    name: "room_users",
})
export class RoomUserModel extends Content {
    @Index("room_users_room_uuid_index")
    @Column({
        length: 40,
    })
    room_uuid: string;

    @Index("room_users_user_uuid_index")
    @Column({
        length: 40,
    })
    user_uuid: string;

    @Index("room_users_is_delete_index")
    @Column({
        default: false,
    })
    is_delete: boolean;
}
