const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} (Units: {props.part.exercises})
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p><strong>Total Units: {props.total}</strong></p>
}

const Footer = (props) => {
  return (
    <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340: Industry Elective 1'
  
  const part1 = {
    name: 'Introduction to React',
    exercises: 3
  }
  const part2 = {
    name: 'Networking 2',
    exercises: 3
  }
  const part3 = {
    name: 'Quantitative Methods',
    exercises: 3
  }

  const studentName = 'Kerby Abistado'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer fullName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
