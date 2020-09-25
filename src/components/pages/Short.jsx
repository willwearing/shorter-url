import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Short = () => {
  const { handleSubmit, register, errors } = useForm();
  const [shortURL, setShortUrl] = useState([]);
  const POST_URL = "https://rel.ink/api/links/";
  const onSubmit = (input) => {
    axios
      .post(POST_URL, input)
      .then((res) => {
        setShortUrl(res.data);
      })
      .catch((err) => console.log(`Error: ${err}`))
      .finally();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="url"
          placeholder="Enter your URL - Copy and Paste from your browser - This will break if not"
          ref={register({
            required: "Required",
            patter: {
              // value: '',
              message: "Please enter the URL that you wish to shorten",
            },
          })}
        />
        {errors.url && errors.url.message}
        <button type="submit">Shorten It!</button>
      </form>
    </div>
  );
};

export default Short;
