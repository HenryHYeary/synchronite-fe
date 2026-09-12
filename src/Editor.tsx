const CURRENT_FOLDER = "~/.config/retroarch/saves";
const WATCHED_TAG = "saves"

export default function Editor() {
  return (
    <div>
      <h1>Editing Watched Directory: {CURRENT_FOLDER}</h1>
      <h1>Tag of Watched Directory: {WATCHED_TAG}</h1>
    </div>
  )
}