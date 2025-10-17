import type { ChangeEvent } from "react";

type InputProps = {
    label: string;
    name: string;
    type?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required: boolean;
};

export function Input(props: InputProps) {
    const { label, type, name, value, placeholder, onChange, required } = props;
    return (
        <div className="mb-[32px] flex w-full flex-col gap-3">
            <label
                htmlFor={label}
                className="text-second-110 text-base/normal font-normal"
            >
                {label} {required && "*"}
            </label>
            <div>
                {required ? (
                    <input
                        type={type ? type : "text"}
                        name={name}
                        id={label}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="bg-second-50 border-first-90 placeholder:text-second-90 text-second-110 h-[56px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal outline-none"
                        required
                    />
                ) : (
                    <input
                        type={type ? type : "text"}
                        name={name}
                        id={label}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="bg-second-50 border-first-90 placeholder:text-second-90 text-second-110 h-[56px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal outline-none"
                    />
                )}
            </div>
        </div>
    );
}

type TextAreaProp = {
    label: string;
    name: string;
    value?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};
export function TextArea(props: TextAreaProp) {
    const { label, name, value, placeholder, onChange } = props;

    return (
        <div className="mb-[32px] flex w-full flex-col gap-3">
            <label
                htmlFor={label}
                className="text-second-110 text-base/normal font-normal"
            >
                {label} *
            </label>
            <div>
                <textarea
                    name={name}
                    id={label}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="bg-second-50 border-first-90 placeholder:text-second-90 text-second-110 no-scrollbar h-[124px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal outline-none"
                    required
                ></textarea>
            </div>
        </div>
    );
}
