const CURRENT_FOLDER = "~/.config/retroarch/saves";
const WATCHED_TAG = "saves"

const DUMMY_DATA =  {
  label: "saves",
  path: "~/.config/retroarch/saves",
  watchedExts: [".srm", ".save", ".sav"]
};

export default function Editor() {
  return (
    <div className="hero">
      <h1>Editing Watched Directory: <span className="watched-directory-editor">{CURRENT_FOLDER}</span></h1>
      <h1>Tag of Watched Directory: <span className="watched-tag-editor">{WATCHED_TAG}</span></h1>

      <h2>Watched extensions:</h2>
      <ul className="extension-list-btns">
        {DUMMY_DATA.watchedExts.map((ext) => {
          return <button className="ext-btn">{ext}</button>
        })}
      </ul>
    </div>
  )
}