import './header.css';

function Header() {
  return (
    <div id='home' className='container header-container'>
      <h3>
        <p className="Hi">
         Hi,I<span>'</span>m
        </p>
        <h4 className="header_name">
          Erwin Yuliyanto
        </h4>
        
      </h3>
      <h2 className="header_desc">Full-Stack Web Developer</h2>
    </div>
  );
}
export default Header;
