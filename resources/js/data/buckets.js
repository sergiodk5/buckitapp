const buckets = [
    {
        id: 1,
        name: "Idea 1",
        description: "This is the descrition",
        done: true,
        lists: 1,
        completed: 1,
        repository: "#",
        todos: [
            {
                id: 1,
                name: "Todo 1",
                description: "This is the description",
                done: true,
                items: 1,
                completed: 1,
                tasks: [
                    {
                        id: 1,
                        name: "Task 1",
                        description: "This is the description",
                        done: true,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: "Idea 2",
        description: "This is the descrition",
        done: false,
        lists: 1,
        completed: 0,
        repository: "#",
        todos: [
            {
                id: 2,
                name: "Todo 1",
                description: "This is the description",
                done: false,
                items: 2,
                completed: 1,
                tasks: [
                    {
                        id: 2,
                        name: "Task 2",
                        description: "This is the description",
                        done: true,
                    },
                    {
                        id: 3,
                        name: "Task 3",
                        description: "This is the description",
                        done: true,
                    },
                ],
            },
            {
                id: 3,
                name: "Todo 2",
                description: "This is the description",
                done: false,
                items: 1,
                completed: 0,
                tasks: [
                    {
                        id: 4,
                        name: "Task 4",
                        description: "This is the description",
                        done: true,
                    },
                ],
            },
        ],
    },
];

export default buckets;
