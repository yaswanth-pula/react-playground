import "./inputText.css";

function InputText() {
  return (
    <div className="inputClass">
      <input
        className="urlInput"
        type="text"
        spellCheck="false"
        autocomplete="off"
        placeholder="shorten your Link"
      />
    </div>
  );
}

export default InputText;
