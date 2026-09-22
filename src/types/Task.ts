export type TaskCategory = 'study' | 'work' | 'personal';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  category: TaskCategory;
}