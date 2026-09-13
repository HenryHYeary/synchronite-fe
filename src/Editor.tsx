import { useState } from "react";

const CURRENT_FOLDER = "~/.config/retroarch/saves";
const WATCHED_TAG = "saves";

export default function Editor() {
  const [exts, setExts] = useState([
    { id: 1, name: ".srm" },
    { id: 2, name: ".save" },
    { id: 3, name: ".sav" },
  ]);
  const DUMMY_DATA =  {
    label: "saves",
    path: "~/.config/retroarch/saves",
    watchedExts: exts
  };

  const handleRemove = (id: number) => {
    setExts(prevExts => prevExts.filter(item => item.id !== id));
  }

  return (
    <div className="hero">
      <h1>Editing Watched Directory: <span className="watched-directory-editor">{CURRENT_FOLDER}</span></h1>
      <h1>Tag of Watched Directory: <span className="watched-tag-editor">{WATCHED_TAG}</span></h1>

      <h2>Watched extensions:</h2>
      <ul className="extension-list-btns">
        {DUMMY_DATA.watchedExts.map((ext) => {
          return <button className="ext-btn">{ext.name}<span onClick={() => handleRemove(ext.id)} className="clickable-x">x</span></button>
        })}
      </ul>
    </div>
  )
}