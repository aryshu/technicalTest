import './App.css'

const header = () => {
  return (
    <header>
  <div className="header-content">
    <div className="logo">
      <img
        src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/318440000_222733863424446_1016081488252678669_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vJg-2cglSAEAX9aFsjW&_nc_ht=scontent.fmnl30-2.fna&oh=00_AfCh3ZrvGJOOe7h9ykBgQHw1asmyWVF4GdnZgn8S43aYjg&oe=64D082EE"
        style={{ height: '100px' }}
        alt="Logo"
      />
    </div>
    <nav>
      <ul>
        <li><a href="/">About</a></li>
        <li><a href="/about">Career</a></li>
        <li><a href="/contact">More</a></li>
      </ul>
    </nav>
  </div>
</header>

  )
}

export default header