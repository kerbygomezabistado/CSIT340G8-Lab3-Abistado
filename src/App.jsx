const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} (Units: {props.exercises1})</p>
      <p>{props.part2} (Units: {props.exercises2})</p>
      <p>{props.part3} (Units: {props.exercises3})</p>
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
  const part1 = 'Integrative Programming and Technologies'
  const exercises1 = 3
  const part2 = 'Networking 2'
  const exercises2 = 3
  const part3 = 'Quantitative Methods'
  const exercises3 = 3

  const studentName = 'Kerby Abistado'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      
      <Footer fullName={studentName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App
