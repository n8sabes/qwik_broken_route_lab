
export interface TodoItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type TodoItems = TodoItem[];

export const getTodoItems = async (url: string): Promise<TodoItems> => {
    try {
        const config = {
            method: 'get',
            headers: {
                "Content-Type": "application/json"
            },
        }
        console.log(`fetch config `, config);
        const fetchResult = await fetch(url, config);
        const items = await fetchResult.json();
        return items;
    } catch (error: any) {
        console.log(`fetch error`, error);
        throw error;
    }
}