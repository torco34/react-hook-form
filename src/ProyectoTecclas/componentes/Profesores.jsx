import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form";
import { Alert, Button, Form, Input, InputNumber, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
export const Profesores = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      // defaultValues: {}; you can populate the fields by this attribute
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <div>
      {fields.map((item, index) => (
        <div className="">
          <input {...register(`test.${index}.firstName`)} />
          <Controller
            render={({ field }) => <input {...field} />}
            name={`test.${index}.lastName`}
            control={control}
          />
          <Button  onClick={() => remove(index)}>
            <DeleteFilled style={{ fontSize: "15px", color: "#b91010cc" }} />
          </Button>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => append({ firstName: "bill", lastName: "luo" })}
      >
        Seleccionar Profesores
      </Button>
    </div>
  );
};
