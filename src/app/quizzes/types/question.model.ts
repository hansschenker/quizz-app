import { Technology } from "./technology.model";
import { Level } from "./level.type";

export interface Question {
  id: string;
  title: string;
  technology: Technology;
  level: Level;
}
