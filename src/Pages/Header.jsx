import PropTypes from "prop-types";

const Header = ({ Title, Describe, Data, className,Email }) => {
  return (
    <div className="p-4 sm:ml-64 md:ml-64 lg:ml-64">
      <header className="text-gray-600 ">
        <div className=" bg-blue-500 rounded-lg py-4 px-4 flex flex-wrap  flex-col md:flex-row">
          <nav className="flex flex-wrap flex-start text-base">
            <h6 className="mr-[18vw] ml-10 hover:text-gray-900 font-bold text-slate-50">
              {Title}
            </h6>
            <h6 className="mr-[17vw] ml-10 hover:text-gray-900 font-bold text-slate-50">
              {Email}
            </h6>
            <h6
              className={`hover:text-gray-900 font-bold text-slate-50 ${className}`}
            >
              {Describe}
            </h6>
           {Data && <h6 className="mr-5 hover:text-gray-900 font-bold text-slate-50">
              {Data}
            </h6>}
          </nav>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  Title: PropTypes.string.isRequired,
  Describe: PropTypes.string,
  Data: PropTypes.string,
  className: PropTypes.string,
  Email:PropTypes.string
};

export default Header;
