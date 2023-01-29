import Navbar from "./Navbar";
import { useState } from "react";
import FormField from "./FormField";
import preview from "../assets/preview.png";
import kitchenSKETCH from "../assets/kitchenSKETCH.jpeg";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [form, setForm] = useState({
    title: "",
    tags: "",
    photo: "",
  });

  function handleSubmit() {}

  function handleChange(e) {}

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto mt-10 flex gap-5">
        <div className="w-1/2">
          <div>
            <h1 className="font-bold text-[32px]">
              Upload ashtonishing designs
            </h1>
            <p className="mt-2 text-[14px] max-w-[500px]">
              Share your best designs with the community and earn reputation
              through the process.
            </p>
          </div>

          <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <FormField
                labelName="Title"
                type="text"
                name="title"
                placeholder="Cozy wooden kitchen"
                value={form.title}
                handleChange={handleChange}
              />
              <FormField
                labelName="Tags"
                type="text"
                name="tags"
                placeholder="japanese, kitchen..."
                value={form.tags}
                handleChange={handleChange}
              />

              <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
                {form.post ? (
                  <img
                    src={form.photo}
                    alt={form.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-9/12 h-9/12 object-contain opacity-40"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <img src={kitchenSKETCH} width={400} height={600}></img>
        </div>
      </section>
    </div>
  );
}
