import { Gender } from "./enums";

export interface UserProfileInput {
  image?: string;
  age?: number;
  gender?: Gender;
  height?: number;
  weight?: number;
  targetWeight?: number;
}

