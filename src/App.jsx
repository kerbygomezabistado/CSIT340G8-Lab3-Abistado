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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalUnits = props.parts[0].exercises + 
                     props.parts[1].exercises + 
                     props.parts[2].exercises

  return <p><strong>Total Units: {totalUnits}</strong></p>
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
  
  const parts = [
    {
      name: 'Introduction to React',
      exercises: 3
    },
    {
      name: 'Networking 2',
      exercises: 3
    },
    {
      name: 'Quantitative Methods',
      exercises: 3
    }
  ]

  const studentName = 'Kerby Abistado'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
