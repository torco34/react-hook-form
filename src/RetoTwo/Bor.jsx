import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function Bor() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Formulario de Solicitud de Empleo</h2>

      <div>
        <label htmlFor="name">Nombre Completo:</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Este campo es obligatorio' }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="name"
              placeholder="Ingresa tu nombre completo"
            />
          )}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Este campo es obligatorio', pattern: /^\S+@\S+$/i }}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              id="email"
              placeholder="Ingresa tu correo electrónico"
            />
          )}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="resume">Cargar Currículum (PDF):</label>
        <Controller
          name="resume"
          control={control}
          rules={{ validate: file => file[0].type === 'application/pdf' }}
          render={({ field }) => (
            <input
              {...field}
              type="file"
              accept=".pdf"
              id="resume"
            />
          )}
        />
        {errors.resume && <span>Sube un archivo PDF válido.</span>}
      </div>

      <div>
        <label htmlFor="coverLetter">Carta de Presentación:</label>
        <Controller
          name="coverLetter"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              id="coverLetter"
              rows="5"
              placeholder="Escribe tu carta de presentación"
            />
          )}
        />
      </div>

      <div>
        <label>Tipo de Empleo:</label>
        <Controller
          name="employmentType"
          control={control}
          render={({ field }) => (
            <select {...field}>
              <option value="fullTime">Tiempo Completo</option>
              <option value="partTime">Medio Tiempo</option>
              <option value="contract">Contrato</option>
            </select>
          )}
        />
      </div>

      <div>
        <label htmlFor="skills">Habilidades (separadas por comas):</label>
        <Controller
          name="skills"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="skills"
              placeholder="Ejemplo: Comunicación, Programación, Diseño"
            />
          )}
        />
      </div>

      <div>
        <label>
          {/* <input type="checkbox" {...control('agreeTerms')} /> */}
          Acepto los términos y condiciones.
        </label>
      </div>

      <button type="submit">Enviar Solicitud</button>
    </form>
  );
}

export default Bor;
