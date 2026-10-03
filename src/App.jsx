const Header = (props) => {
  return <h1>{props.course.name}</h1>
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
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalUnits = props.course.parts[0].exercises + 
                     props.course.parts[1].exercises + 
                     props.course.parts[2].exercises

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
  const course = {
    name: 'CSIT340: Industry Elective 1',
    parts: [
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
  }

  const studentName = 'Kerby Abistado'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer fullName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
