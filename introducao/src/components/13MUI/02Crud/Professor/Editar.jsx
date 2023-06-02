import { Box, Button, TextField, Typography } from "@mui/material"
import { FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { Checkbox, InputLabel, MenuItem, Select } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Editar = () => {

    let { id } = useParams()

    const professores = [
        { id: 0, nome:"Jefferson Carvalho", curso:"SI", titulacao:"MEST", ai:{cg:true, mc:false, al:false, es:false}}, 
        { id: 1, nome:"Atilio Luiz", curso:"CC", titulacao: "DOUT", ai:{cg:false, mc:true, al:false, es:false} }, 
        { id: 2, nome:"Ricardo Reis", curso:"CC", titulacao: "DOUT", ai:{cg:false, mc:false, al:true, es:false} },
        { id: 3, nome:"Wladimir Tavares", curso:"SI", titulacao: "GRAD", ai:{cg:true, mc:false, al:false, es:false} },
        { id: 4, nome:"Viviane Menezes", curso:"CC", titulacao: "DOUT", ai:{cg:true, mc:false, al:true, es:false} }
    ]

    function getProfessorById(id) {
        for (let i = 0; i < professores.length; i++) {
            if (id == professores[i].id) {
                return professores[i]
            }
        }
        return null
    }

    const [nome,setNome] = useState("")                                    // textfield
    const [curso,setCurso] = useState("")                                  // textfield
    const [titulacao, setTitulacao] = useState("GRAD")                     // select
    const [ai, setAi] = useState({cg:false, mc:false, al:false, es:false}) // checkbox
    let { cg, mc, al, es } = ai

    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)

    }

    useEffect(
        () => {
            let professor = getProfessorById(id)
            setNome(professor.nome)
            setCurso(professor.curso)
            setTitulacao(professor.titulacao)
            setAi(professor.ai)

        }
        ,
        [] //como [] está vazio, o useEffect funciona como construtor
    )

    function handleCheckbox (event) {
        setAi ({ 
            ...ai, [event.target.name]: event.target.checked
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Professor
            </Typography>
            <Box
                sx={{width:"80%"}}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    value={nome}

                    id="nome"
                    name="nome"
                    onChange={(event)=>setNome(event.target.value)}
                    
                />
                <TextField 
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Curso"
                    value={curso}

                    id="curso"
                    name="curso"
                    onChange={(event)=>setCurso(event.target.value)}
                    
                />

                <FormControl sx={{marginTop: 2, width:"100%"}}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD"> Graduação</MenuItem>
                        <MenuItem value="MEST"> Mestrado</MenuItem>
                        <MenuItem value="DOUT"> Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{mt: 2, ml: 2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize: 12, mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onChange={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox} />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox} />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox} />} label="Engenharia de Sofware" />
                    </FormGroup>
                </FormControl>


                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Editar
                    </Button>
                </Box>
            </Box>
        </>

    )
}
export default Editar