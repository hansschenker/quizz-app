import { Technology } from "../../../quizzes/state/technology.model";
import { Category } from "../../../quizzes/state/category.type";

export interface Answer {
  id: string;
  title: string;
  technology: Technology;
  category: Category;
}
