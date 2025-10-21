import { useRef, useState, type ChangeEvent } from "react";
import { Image } from "./image";
import DownloadIcon from "../../assets/material-symbols-light_upload-sharp.svg"

type InputProps = {
    label: string;
    name: string;
    type?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
    width?: string
};

export function Input(props: InputProps) {
    const { label, type, name, value, placeholder, onChange, required, className, width } = props;
    return (
        <div className={`mb-[32px] flex w-full flex-col gap-3 ${className ? className : ""}`}>
            <label
                htmlFor={label}
                className="text-second-110 text-base/normal font-normal"
            >
                {label}
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
                        className={`bg-second-50 border-first-90 placeholder:text-second-90 text-first-30 h-[56px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal outline-none ${width ? width : ""}`}
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
                        className={`bg-second-50 border-first-90 placeholder:text-second-90 text-first-30 h-[56px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal outline-none ${width ? width : ""}`}
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
    className?: string;
    width?: string
};
export function TextArea(props: TextAreaProp) {
    const { label, name, value, placeholder, onChange, className, width } = props;

    return (
        <div className={`mb-[32px] flex w-full flex-col gap-3 ${className ? className : ""}`}>
            <label
                htmlFor={label}
                className="text-second-110 text-base/normal font-normal"
            >
                {label} 
            </label>
            <div>
                <textarea
                    name={name}
                    id={label}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`bg-second-50 border-first-90 placeholder:text-second-90 text-first-30 no-scrollbar h-[160px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal outline-none ${width ? width : ""}`}
                    required
                ></textarea>
            </div>
        </div>
    );
}

type FileInputProps = InputProps
export function FileInput(props: FileInputProps) {
    const { label, name, value, placeholder, required, className, width } = props;
    const ref = useRef<HTMLInputElement | null>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Get the first file from the selection
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);

        // *In a real application, you would add logic here to:
        // 1. Validate the file (e.g., size, type).
        // 2. Display a preview.
        // 3. Prepare for actual server upload.*

        if (file) {
            console.log('File selected:', file.name);
        }
    };

    const handleUploadClick = () => {
        if (ref.current) {
            ref.current.click();
        }
    };

    return (
        <div className={`mb-[32px] flex w-full flex-col gap-3 ${className ? className : ""}`}>
            <label
                htmlFor={label}
                className="text-second-110 text-base/normal font-normal"
            >
                {label}
            </label>
            <input
                type="file"
                name={name}
                id={label}
                // onChange={onChange}
                onChange={handleFileChange}
                value={value}
                ref={ref}
                className={`hidden`}
                required={required}
            />
            <div 
                className={`bg-second-50 border-first-90 placeholder:text-second-90 text-first-30 h-[56px] w-full rounded-lg border-1 px-[12px] py-[16px] text-base/normal flex gap-[8px] justify-center outline-none pointer ${width ? width : ""}`}
                onClick={handleUploadClick}
                role="button" 
                tabIndex={0}
            >
                <span>{!selectedFile && placeholder}</span>
                <span>
                    <Image src={DownloadIcon} alt="download icon" className="w-[24px] h-[24px]" />
                </span>
                <span className="max-w-[250px] truncate">{selectedFile && selectedFile.name} </span>
            </div>
        </div>
    );
}
