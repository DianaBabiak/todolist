import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";

export const useAddField = (handlerAdd: (newTitle: string) => void) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<null | string>(null);
  const onChangeValueInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const addedValue = e.target.value;
    setValue(addedValue);
  }, []);

  const onClickAdd = useCallback(() => {
    if (value.trim() === "") {
      setError("Title is required");
      return;
    } else {
      handlerAdd?.(value);
      setValue("");
    }
  }, [value, handlerAdd]);

  const onKeyDownAdd = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      setError("");
      if (e.key === "Enter") {
        if (value.trim() === "") {
          setError("Title is required");
          return;
        } else {
          handlerAdd?.(value);
          setValue("");
        }
      }
    },
    [value, handlerAdd],
  );

  return {
    value,
    error,
    onChangeValueInput,
    onKeyDownAdd,
    onClickAdd,
  };
};
