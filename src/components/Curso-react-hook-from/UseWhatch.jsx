import React from "react";
import { useForm, useWatch } from "react-hook-form";
export const useWhatch = ({}) => {

  const { control, register, handleSubmit } = useForm();
  const firstName = useWatch({
    control,
    name: "firstName",
  });

  return (
    <>
      <Child control={control} />
    </>
  );
};
function Child({ control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });

  return <p>Watch: {firstName}</p>;
}
