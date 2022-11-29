import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import { Form } from "react-router-dom"

export default function Main() {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [single, setSingle] = useState({})
  const [name, setName] = useState("")
  const [input, setInput] = useState({})

  const handleChoice = (e) => {
    const chosen = e.target.value
    const found = data.find((species) => species.id === chosen)
    setSingle(found || {})
  }

  const handlSubmit = (e) => {
    e.preventDefault()
    const found = data.find(
      (species) => species.name.toLowerCase() === name.toLowerCase()
    )
    setInput(found || {})
  }

  useEffect(() => {
    const url = "https://ghibliapi.herokuapp.com/species"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="main_section_line">
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {" "}
              Name: {item.name} ID:{item.id}{" "}
            </li>
          ))}
      </ul>
      <hr />
      <div className="dropDown">
        <select onChange={handleChoice}>
          <option value=""></option>
          {data.map((choice) => (
            <option key={choice.id} value={choice.id}>
              {choice.name}
            </option>
          ))}
        </select>
        {single.id && (
          <div>
            <p>Name: {single.name}</p>
            <p>{single.hair_colors}</p>
          </div>
        )}
      </div>
      <hr />
      <div>
        <Form onSubmit={handlSubmit}>
          <label htmlFor="name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Spirit, Human"
            />
          </label>
          <button type="submit">Submit</button>
        </Form>
        {input.id && (
          <div>
            <p>Name: {input.name}</p>
            <p>{input.hair_colors}</p>
          </div>
        )}
      </div>
    </div>
  )
}
