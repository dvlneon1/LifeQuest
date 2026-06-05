export const achievementsData = [
    {
        id: "first_task",
        title: "Primeiro Passo",
        description: "Complete sua primeira Tarefa",
        condition: {
            type:"taskCompleted",
            value: 1
        },
        reward: {
            xp:50,
            gold: 25
        }
    },
    {
        id: "worker",
        title: "Trabalhador",
        description: "Complete 10 tarefas",
        condition: {
            type: "taskCompleted",
            value: 10
        },
        reward: {
            xp: 100,
            gold: 50
        }
    },
    {
        id: "rich",
        title: "Primeiras Economias",
        description: "Acumule 500 de Gold",
        condition: {
            type: "gold",
            value: 500
        },
        reward: {
            xp: 200,
            gold: 0
        }
    }
]