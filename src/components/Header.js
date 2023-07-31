const HeaderComponent = () => {
  return (
    <div className="header">
      <img
        src="https://walaan.com/storage/app/public/business/2023-05-29-647472b51447f.png"
        alt="logo"
      />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Careers</li>
      </ul>
    </div>
  );
};

export default HeaderComponent;

/**
 *  there are 2 types of exports
 * one is named export where we directly export the function using export keyword , and while importing the same in another component we need to use {}
 *
 * second is default export which by which we can export only one thing and we dont need {} while importing
 *  */
