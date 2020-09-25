import React from "react";
import { useForm } from "react-hook-form";

const Short = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (input) => console.log(input);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="urlShort"
          placeholder="Enter your URL"
          ref={register({
            required: "Required",
            patter: {
              // value: '',
              message: "Please enter the URL that you wish to shorten",
            },
          })}
        />
        {errors.urlShort && errors.urlShort.message}
        <button type="submit">Shorten It!</button>
      </form>
    </div>
  );
};

export default Short;
