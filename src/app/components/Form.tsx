"use client";
import { Sub } from "../../../types";
import useNewSubForm from "../hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          className="border border-solid border-[#eee] py-1"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          className="border border-solid border-[#eee] py-1"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          className="border border-solid border-[#eee] py-1"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
          className="border border-solid border-[#eee] py-1"
        />
        <button className="bg-slate-200" onClick={handleClear}>
          Clear the form
        </button>
        <button className="bg-slate-400" type="submit">
          Save new Sub !
        </button>
      </form>
    </div>
  );
};

export default Form;
