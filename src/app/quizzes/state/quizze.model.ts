import { Category } from "./category.type";
import { Technology } from "./technology.model";
export interface Quizze {
  id: string;
  title: string;
  technology: Technology;
  category: Category;
}
