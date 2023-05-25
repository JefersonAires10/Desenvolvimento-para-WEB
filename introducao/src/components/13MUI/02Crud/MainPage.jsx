import {BrowserRouter, Route, Routes} from "react-router-dom"
import MyMenu from "./MyMenuV1";
import { Container } from "@mui/material";

import CadastrarProfessor from "./Professor/Cadastrar";
import ListarProfessor from "./Professor/Listar";
import EditarProfessor from "./Professor/Editar";


const MainPage = () => {
    return(
        <BrowserRouter>
            <MyMenu />
            <Container sx = {{mt:10, display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Routes>
                    <Route path = "cadastrarProfessor" element = {<CadastrarProfessor/>}/>
                    <Route path = "listarProfessor" element = {<ListarProfessor/>}/>
                    <Route path = "editarProfessor" element = {<EditarProfessor/>}/>
                </Routes>
            </Container>
            
        </BrowserRouter>
    );
}

export default MainPage