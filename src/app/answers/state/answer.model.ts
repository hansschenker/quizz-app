import { Technology } from "../../quizzes/types/technology.model";
import { Level } from "../../quizzes/types/level.type";

export interface Answer {
  id: string;
  title: string;
  technology: Technology;
  level: Level;
}
