import React from "react";

interface Props {
    text: string;
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
}

const Button: React.FC<Props> = ({text, variant = "primary", onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`py-2 px-4 rounded-full text-white font-bold ${
                variant === "primary"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : variant === "secondary"
                        ? "bg-gray-500 hover:bg-gray-600"
                        : "bg-red-500 hover:bg-red-600"
            }`}
        >
            {text}
        </button>
    );
};

export default Button;
