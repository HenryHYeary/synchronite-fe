const DUMMY_DATA = [
  {
    label: "saves",
    path: "~/.config/retroarch/saves",
    watchedExts: [".srm", ".save", ".sav"]
  },
  {
    label: "states",
    path: "~/.config/retroarch/states",
    watchedExts: [".state"]
  },
];

export default function Watched() {
  return (
    <>
      <div className='root-container'>
        <div className="hero">
          <h1>Synchronite</h1>
        </div>
        <h1 className="watched-title">Watched Folders</h1>
        <div className="watched-container">
          <ul className="paths-container">
            {DUMMY_DATA.map((folder) => {
              return (
                <li className="watched-folder">
                  <h2>{folder.label}:</h2> <span className="watched-path">{folder.path}</span>
                    <ul className="watched-exts-list">
                      <label className="ext-label">Watched Extensions:</label>
                      {folder.watchedExts.map((ext) => {
                        return <li className="watched-ext">{ext}</li>
                      })}
                    </ul>
                  <button className="edit-btn">Edit</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}