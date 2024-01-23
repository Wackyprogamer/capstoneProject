import Logo from "../images/Registration_App_Logo.png";

function Signup() {
  return (
    <div
      id="SignupPage"
      className="w-full h-full relative flex justify-center items-center "
    >
      <header
        id="SignupHeader"
        className="w-full h-[75px] flex justify-center absolute top-0"
      >
        <img src={Logo} alt="logo" />
      </header>

      <div id="SignupInfo">
        <h1 className="w-2/5">
          Create
          <br />
          Your
          <br />
          Account!
        </h1>
        <form className="flex flex-wrap w-auto gap-5">
          <div className="Input">
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>First Name</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>Last Name</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>Phone Number</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>Home Address</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>Password</label>
            <input type="text"></input>
          </div>
          <div className="Input">
            <label>Password Agian</label>
            <input type="text"></input>
          </div>
        </form>
      </div>

      <footer
        id="SignupFooter"
        className="w-full h-[25px] flex justify-center items-center absolute bottom-0"
      >
        <p>Help</p>
        <p>@2023 - MtecPro</p>
        <p>About</p>
      </footer>
    </div>
  );
}

export default Signup;
