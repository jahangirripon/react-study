function ProfileCard() {
  return (
    <div className="card">
      <Profile
        devName="Jonas Schmedtmann"
        devDesc="Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach."
        devPhoto="pizzas/spinaci.jpg"
      />
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <img src={props.devPhoto} alt={props.devName} className="profile-img" />
      <div className="card-content">
        <h2>{props.devName}</h2>
        <p className="description">{props.devDesc}</p>
        <div className="tags">
          <span className="tag blue">HTML+CSS 💙</span>
          <span className="tag yellow">JavaScript 🤟</span>
          <span className="tag red">Web Design 🎨</span>
          <span className="tag orange">Git and GitHub 🔥</span>
          <span className="tag cyan">React 🔵</span>
          <span className="tag orange">Svelte 🔥</span>
        </div>
      </div>
    </div>
  );
}
