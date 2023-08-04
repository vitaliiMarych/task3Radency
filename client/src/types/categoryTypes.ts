
export enum Category {
    TASK = 'Task',
    RANDOM_THOUGHT = 'Random Thought',
    IDEA = 'Idea',
}

export interface CategoryType {
    id: number;
    category: Category,
    activeCount: number,
    archivedCount: number
}

