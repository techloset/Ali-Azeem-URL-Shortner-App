import React from "react";
import { InputProps } from "@/app/types/types";

export default function Input({
  value,
  onChange,
  disabled,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div className="relative">
      <input
        className="outline-none placeholder:text-[#C9CED6] p-[24px] border-[4px] border-[#353C4A] w-[659px] h-[76px] rounded-[48px] mb-[32px] peer focus:border-[#144EE31A] bg-[#181E29] drop-shadow-[#0000001A] text-[white] text-[25px] "
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
