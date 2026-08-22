import DropboxLogo from "./assets/dropbox-color-svgrepo-com.svg"

export default function Login() {
  return (
    <>
    <div className="root-container">
      <div className="hero">
        <h1>Sign In via Dropbox</h1>
      </div>
      <button className="sign-in-btn">
        <img src={DropboxLogo} height={20} width={20} alt="Dropbox Icon" /> Authenticate via Dropbox
      </button>
    </div>
    </>
  )
}