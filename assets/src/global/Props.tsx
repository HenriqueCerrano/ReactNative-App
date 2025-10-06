interface AuthContextList {
    taskList: Array<PropCard>,
    onOpen: void,
}

type PropCard = {
    descripition: string,
    flag: PropFlags,
    item: number,
    timeLimit: string,
    title: string,
}

type PropFlags = 'Urgent' | 'Opicional'