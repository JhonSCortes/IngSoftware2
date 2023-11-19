/* 
Different Props for ReactFC
*/

interface ComponentInputProps {
    label: string | null,
    type: string,
    inputController: null | ((type: string, value: string) => void)
}

interface CheckboxInputProps {
    label: string | null,
    text: string,
    inputController: null | ((type: string, value: string) => void)
}

interface Project {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
}

interface Task {
    id: string;
    name: string;
    description: string;
    state: string;
}

export type { ComponentInputProps, CheckboxInputProps, Project, Task }