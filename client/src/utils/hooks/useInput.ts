import React, {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  KeyboardEvent,
} from "react";

type InitProps = {
  inputType: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  handleInput: () => void;
  placeholder?: string;
  id?: string;
};

export type InputProps = {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  id?: string;
};

export function useInput({
  inputType,
  value,
  setValue,
  handleInput,
  placeholder,
  id,
}: InitProps): InputProps {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      // console.log("enter key pressed!");
      handleInput();
    }
  };

  return {
    type: inputType,
    value,
    onChange: handleChange,
    placeholder,
    onKeyDown: handleKeyDown,
    id,
  };
}

// export default useInput;