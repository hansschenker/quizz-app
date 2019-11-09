import { Technology } from "./technology.model";
import { Category } from "./category.type";

export interface Question {
  id: string;
  title: string;
  technology: Technology;
  category: Category;
}
