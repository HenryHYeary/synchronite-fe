
const FEATURES: string[] = [
  "Custom save extensions to watch on a per directory basis.",
  "Hash based sync layer which detects file changes as well as timestamp differences.",
  "Prompt based conflict resolution between local and cloud filestores.",
  "Seamless integration with your cloud storage provider of choice."
];

export default function Home() {
  return (
    <>
      <div className='root-container'>
        <div className='hero'>
          <h1>Synchronite</h1>
          <h2>A device agnostic save synchronizer</h2>
          <p>Store your saves in Dropbox, GDrive, or any S3 compatible source through Synchronite.</p>
        </div>
        <div className='feature-container'>
          <h2 className='feature-header'>Features include</h2>
          <ul className='feature-list'>
            {FEATURES.map((feat) => {
              return (
                <button className='feature-btn'>
                  <li className='feature-item'>{feat}</li>
                </button>
              )
            })}
          </ul>
          <button className="sign-in-btn">
            <a className="sign-in-link" href="./auth">
              Sign In or Sign Up
            </a>
          </button>
        </div>
      </div>
    </>
  )
}