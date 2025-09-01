import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ButtonBackMenu = () => {
    const navigate = useNavigate()
    return (
        <Button variant="contained" onClick={() => navigate('/menu')}>
            Menu inicial
        </Button>
    )
}

export default ButtonBackMenu
