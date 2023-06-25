
import {IsString,IsEnum} from "class-validator"
import { PlatfromType } from "../types/types";

const PlatfromTypeArr: PlatfromType[] = [
  'Twitch',
  'YouTube',
  'TikTok',
  'Kick',
  'Rumble',
];

export class CreateStreamerDto {
  @IsString()
  name: string;
  @IsEnum(PlatfromTypeArr)
  platfromType: PlatfromType;
  @IsString()
  description: string;
}
