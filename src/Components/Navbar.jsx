import React, { useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [search, setSearch] = useState("")
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // ✅ derive from URL
  const q = searchParams.get("q") ?? ""
  const language = searchParams.get("language") ?? "hi"

  function postSearch(e) {
    e.preventDefault()
    if (!search.trim()) return
    navigate(`/?q=${search}&language=${language}`)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="light">
      <div className="container-fluid">

        <Link className="navbar-brand text-light" to={`/?language=${language}`}>
          NewsApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">

            <li className="nav-item">
              <Link className="nav-link text-light active" to={`/?language=${language}`}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to={`/?q=Crime&language=${language}`}>Crime</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to={`/?q=Education&language=${language}`}>Education</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to={`/?q=Science&language=${language}`}>Science</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to={`/?q=Technology&language=${language}`}>Technology</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to={`/?q=Cricket&language=${language}`}>Cricket</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to={`/?q=Sports&language=${language}`}>Sports</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link text-light dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Others
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={`/?q=Entertainment&language=${language}`}>Entertainment</Link></li>
                <li><Link className="dropdown-item" to={`/?q=Economics&language=${language}`}>Economics</Link></li>
                <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
                <li><Link className="dropdown-item" to={`/?q=India&language=${language}`}>India</Link></li>
                <li><Link className="dropdown-item" to={`/?q=Jokes&language=${language}`}>Jokes</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link text-light dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Language
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`}>Hindi</Link></li>
                <li><Link className="dropdown-item" to={`/?q=${q}&language=en`}>English</Link></li>
                <li><Link className="dropdown-item" to={`/?q=${q}&language=fr`}>French</Link></li>
                <li><Link className="dropdown-item" to={`/?q=${q}&language=es`}>Spanish</Link></li>
                <li><Link className="dropdown-item" to={`/?q=${q}&language=de`}>German</Link></li>
              </ul>
            </li>

          </ul>

          <form className="d-flex" role="search" onSubmit={postSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  )
}
