import './App.css'

const header = () => {
  return (
    <header>
  <div className="header-content">
    <div className="logo">
      <img
        src="https://raw.githubusercontent.com/ataraxielle/technicalTest/main/src/images/logo.png"
        style={{ height: '50px' }}
        alt="Logo"
      />
    </div>
    <nav>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/about">Career</a></li>
        <li><a href="/contact" >More</a></li>
      </ul>
    </nav>
  </div>
</header>

  )
}

export default header