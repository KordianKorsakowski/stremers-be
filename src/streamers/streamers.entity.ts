import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Streamers {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 80 })
  name: string;
  @Column()
  platfromType: string;
  @Column('varchar', { length: 250 })
  description: string;
  @Column({ default: 0 })
  upvote: number;
  @Column({ default: 0 })
  downvote: number;
  @Column({
    default:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png',
  })
  urlImg: string;
}
