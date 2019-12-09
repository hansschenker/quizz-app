import { Level } from "./level.type";
import { Technology } from "./technology.model";

export interface Quizz {
  id: string;
  title: string;
  technology: Technology;
  level: Level;
}
