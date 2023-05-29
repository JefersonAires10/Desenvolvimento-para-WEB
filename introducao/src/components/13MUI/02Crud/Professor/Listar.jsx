import { Box, Typography } from "@mui/material"
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { styled } from "@mui/material/styles"


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
    
    const professores = [
        { id: 0, nome:"Jefferson Carvalho", curso:"SI", titulacao:"MEST" }, 
        { id: 1, nome:"Atilio Luiz", curso:"CC", titulacao: "DOUT" }, 
        { id: 2, nome:"Ricardo Reis", curso:"CC", titulacao: "DOUT" },
        { id: 3, nome:"Wladimir Tavares", curso:"SI", titulacao: "GRAD" },
        { id: 4, nome:"Viviane Menezes", curso:"CC", titulacao: "DOUT" }
    ]

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
                                                    <IconButton arial-label="edit" color="primary">
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton arial-label="delete" color="error">
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