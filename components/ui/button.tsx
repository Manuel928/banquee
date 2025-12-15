import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "plain";
  border?: "gray" | "none";
  textColor?: "white" | "green" | "black";
}

const borderClasses = {
  gray: "border border-[#E8E8E8]",
  none: "",
};

const textColorClasses = {
  white: "text-white",
  green: "text-[#5BB5A2]",
  black: "text-black",
};

const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  border = "none",
  textColor = "green",
  children,
  ...props
}) => {
  const plain = `
    bg-white
    ${borderClasses[border]}
    ${textColorClasses[textColor]}
    rounded-md
    cursor-pointer
    px-3 py-2
    font-medium
  `;

  const filled = `
    bg-[#5BB5A2]
    text-white
    rounded-md
    px-3 py-2
    cursor-pointer
  `;

  return (
    <button
      {...props}
      className={`${
        variant === "plain" ? plain : filled
      } flex items-center justify-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
