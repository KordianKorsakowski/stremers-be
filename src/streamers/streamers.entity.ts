import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Streamers {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("varchar", { length: 80 })
    name: string; 
    @Column()
    platfromType: string;
    @Column("varchar", { length: 250 })
    description: string;
    @Column()
    upvote: number;
    @Column()
    downvote: number;
}