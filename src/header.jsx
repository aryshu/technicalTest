import './App.css'

const header = () => {
  return (
    <header>
  <div className="header-content">
    <div className="logo">
      <img
        src="images/logo.png"
        style={{ height: '100px' }}
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