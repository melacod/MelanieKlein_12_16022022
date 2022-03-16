import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

/**
 * Home page
 * @component
 * @category Home
 */
const Home = () => {
    const navigate = useNavigate()

    const [id, setId] = useState('')

    const onClickFunction = () => {
        navigate('/dashboard/' + id)
    }

    const onChangeFunction = (event) => {
        setId(event.target.value)
    }

    return (
        <div>
            <div className="message_Home">Bienvenue sur SportSee !</div>
            <label>Identifiant</label>
            <div className="form_Home">
                <input
                    placeholder="Identifiant"
                    value={id}
                    onChange={onChangeFunction}
                    className="input_Home"
                ></input>
                <button onClick={onClickFunction} className="btn_Home">
                    Ok
                </button>
            </div>
        </div>
    )
}

export default Home
