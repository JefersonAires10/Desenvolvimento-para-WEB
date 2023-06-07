import { Box, Typography } from "@mui/material"
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from "@mui/material/styles"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const Listar = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
    
    const [professores, setProfessores] = useState([])

    useEffect (
        () => {
            axios.get("http://localhost:3001/professor/listar")
            .then (
                (response) => {
                    setProfessores(response.data)
                }
            ) 
            .catch (
                (error) => {

                }
            )
        }
        ,
        []
    ) 

    
    function deleteProfessorById(id) {
        if (window.confirm("Deseja excluir o professor?")) {
            alert(`Professor ${id} excluído com sucesso!`)
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold" >
                Listar Professores
            </Typography >
            <TableContainer component={Paper} sx={{mt: 3}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Nome</StyledTableCell>
                            <StyledTableCell>Curso</StyledTableCell>
                            <StyledTableCell>Titulação</StyledTableCell>
                            <StyledTableCell>Ações</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            professores.map(
                                (professor) => {
                                    return (
                                        <StyledTableRow>
                                            <StyledTableCell>{professor.id}</StyledTableCell>
                                            <StyledTableCell>{professor.nome}</StyledTableCell>
                                            <StyledTableCell>{professor.curso}</StyledTableCell>
                                            <StyledTableCell>{professor.titulacao}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box>
                                                    <IconButton arial-label="edit" color="primary" component={Link} to={`/editarProfessor/${professor.id}`}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton arial-label="delete" color="error" onClick={ () => deleteProfessorById(professor.id) } >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>

                                        </StyledTableRow>
                                    )
                                }
                            )
            
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>   
    )
}
export default Listar