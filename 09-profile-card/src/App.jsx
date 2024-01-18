import './styles.css'

const skills = [
  'HTML+CSS 💪',
  'JavaScript 💪',
  'Web Design 💪',
  'Git and Github 👍',
  'React 💪',
  'Svelte 👶',
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <h1>Gevin Madharha</h1>
      <div className="data">
        <Data />
      </div>
      <div className="skill-list">
        <Skill skill={skills[0]} />
        <Skill skill={skills[1]} />
        <Skill skill={skills[2]} />
        <Skill skill={skills[3]} />
        <Skill skill={skills[4]} />
        <Skill skill={skills[5]} />
      </div>
    </div>
  )
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="my avatar" />
}

function Data() {
  return (
    <p>
      Full-stack web developer and teacher at Udemy. When not coding or
      preparing a course, I like to play board games, to cook (and eat), or to
      just nejoy the Portuguese sun at the beach.
    </p>
  )
}

function Skill(props) {
  const sk = props.skill
  return <div className="skill">{sk}</div>
}

export default App
