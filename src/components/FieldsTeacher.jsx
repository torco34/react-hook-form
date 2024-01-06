import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button, Select } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { useHookCourse } from "../useContext/HooksAllProvider";
import "../assets/css/fieldsTeacher.css";

export const FieldsTeacher = ({ onSubmit }) => {
  console.log("Form Data in FieldsTeacher:");
  // sección de  fields array
  const { control, register, getValues, handleSubmit } = useForm({
    defaultValues: {
      items: [],
      jornadas: [],
    },
  });
  const { fields, append, remove, setGetValue } = useFieldArray({
    control,
    name: "item",
  });
  console.log(fields, "fields");
  const { contextAllHooks } = useHookCourse();
  const {
    // SERVICIOS DE API

    setDataNameTime,
    dataNameTime,
    setDataTeacher,
    dataTeacher,
    //
    // curso seleccionados para agregar profesor
    courseSelectedForTeacher,
    setCourseSelectedForTeacher,
    // seleccionar nombre del profesor
    selectedName,
    setSelectedName,
    //

    setNameTeacher,
    nameTeacher,
  } = contextAllHooks;

  const handleProfeOnchange = (value) => {
    const index = selectedName.indexOf(value);
    setDataTeacher([...dataTeacher, value])
    if (index === -1) {
      setSelectedName([...selectedName, value]);
    } else {
      const nuevaArray = nameTeacher.filter((item) => item.name !== value);
      setNameTeacher(nuevaArray);
    }
  };

  const handleJornadaOnchange = (value) => {
    const time = value;
    setDataTeacher([...dataTeacher, time])
    const nuevoArray = dataNameTime.filter((item) => item.name !== time);
    console.log(value);
    setDataNameTime(nuevoArray);

    if (nuevoArray.length === 0) {
      console.log("hola cero");
      setDataNameTime(dataNameTime);
      const { name } = dataNameTime;
      console.log(name);
    }
  };

  const handleCursosOnchange = (value) => {
    setDataTeacher([...dataTeacher, value])
    const nuevosCurso = courseSelectedForTeacher.filter(
      (item) => item !== value
    );
    setCourseSelectedForTeacher(nuevosCurso);
  };
 

  return (
    <div className="div-padre-teacher">
      {fields.map((field, index) => (
        <div key={field.id} className="containerProfesor">
          {/* TENER EN CUENTA QUE AQUI CAMBIA EL ORDEN DEL FIEL ARRAY */}
          <div>
            <div className="div-fil-spaces">
              <br />
              <label>Profesor:</label>
              <Controller
                name={`profe.${index}.profesor`}
                control={control}
                defaultValues=""
                render={({ field }) => (
                  <div>
                    <Select
                      {...field}
                      style={{ width: "80%" }}
                      //  esto hace que lo seleccionado se vea en el input
                      value={field.corso}
                      onChange={(value) => {
                        field.onChange(value);
                        handleProfeOnchange(value, index);
                      }}
                    >
                      {nameTeacher.map((datos, datosIndex) => (
                        <Select.Option
                          key={datosIndex}
                          value={datos.name}

                          //   onMouseDown={() => handleClick(datos.name)}
                        >
                          {datos.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <div className="div-fil-spaces">
              <br />
              <label>Cursos:</label>
              <Controller
                name={`test.${index}.jornada`}
                control={control}
                render={({ field }) => (
                  <div>
                    <Select
                      {...field}
                      style={{ width: "80%" }}
                      value={field.curso}
                      onChange={(value) => {
                        field.onChange(value);
                        handleCursosOnchange(value, index);
                      }}
                    >
                      {courseSelectedForTeacher.map((curso, cursoIndex) => (
                        <Select.Option
                          onClick={handleProfeOnchange}
                          key={curso}
                          value={curso.name}
                        >
                          {curso.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <div className="div-fil-spaces">
              <br />
              <label>Jornada:</label>
              <Controller
                name={`test.${index}.jornada`}
                control={control}
                render={({ field }) => (
                  <div>
                    <Select
                      {...field}
                      style={{ width: "80%" }}
                      value={field.jornada}
                      onChange={(value) => {
                        field.onChange(value);
                        handleJornadaOnchange(value, index);
                      }}
                    >
                      {dataNameTime.map((jornada, cursoIndex) => (
                        <Select.Option
                          key={jornada.id}
                          value={jornada.name}
                          //   onMouseDown={() => handleClickJornada(jornada.name)}
                        >
                          {jornada.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                )}
              />
            </div>
          </div>
          <br />
          <div>
            <Button
              onClick={() => {
                remove(index);
              }}
              className="button"
            >
              <DeleteFilled style={{ color: "#b91010cc" }} />
            </Button>
          </div>
        </div>
      ))}

      <div className="selectedProfe ">
        <br />
        {courseSelectedForTeacher.length === 0 ? null : (
          <>
            <Button
            
              onClick={() => {
                append({ name: "" });
              }}
              style={{ width: "50%", color: "#334257"}}
            >
              Seleccionar Profesores
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
