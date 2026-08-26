const DUMMY_DATA = [
  {
    label: "saves",
    path: "~/.config/retroarch/saves"
  },
  {
    label: "states",
    path: "~/.config/retroarch/states"
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
          <ul>
            {DUMMY_DATA.map((folder) => {
              return (
                <li className="watched-folder">{folder.label}: <span className="watched-path">{folder.path}</span></li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}