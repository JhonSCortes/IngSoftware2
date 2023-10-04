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

export type { ComponentInputProps, CheckboxInputProps }