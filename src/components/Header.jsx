import ProfilePhoto from "/profile-photo.jpg"
import "../styles/Header.css"

export const Header = () => {
  return (
    <header>
        <section className="nav-section">
        <i className="fa-solid fa-angle-left"></i>
        <h2>codeacademykids</h2>
        </section>

        <hr />


        <section className="title-section">
        <div className="profile-image">
            <img src={ProfilePhoto} alt="cak-logo" />
        </div>
        <div className="right">
            <div className="right-top">codeacademy kids  <i class="fa-solid fa-ellipsis"></i></div>
            <div className="right-bottom">
            <button>Following</button>
            <button>Message</button>
            <button><i class="fa-solid fa-user-plus"></i></button>
            </div>
        </div>
        </section>

        <section className="bio-section">
        <h2>CodeAcademy Kids</h2>
        <p>Programavimo būrelis 5-18 metų moksleiviams</p>
        <p>Vilnius | Kaunas | Klaipėda | Šiauliai | Rokiškis</p>
        <p className="bio-hashtags">#codeacademykids #codeyourfuture</p>
        <a href="https://www.codeacademykids.com/" className="bio-link">www.codeacademykids.com</a>
        <p className="bio-followers">
            Followed by  <a href="#" className="followers-link"> Tomas </a>
            and
            <a href="https://www.codeacademykids.com/" className="followers-link"> Ieva </a>
        </p>
        </section>
  </header>
  )
}
