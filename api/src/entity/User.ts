import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Exclude()
    @Column()
    password: string;

    @Column()
    email: string;

    @Column({ nullable: true })
    fullName?: string;

    @Column({ nullable: true })
    profilePictureUrl?: string;
}
