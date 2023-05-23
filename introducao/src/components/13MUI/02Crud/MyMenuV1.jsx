import { AppBar, Button, Container, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';

const MyMenu = () => {

    const [anchorElProfessor, setAnchorElProfessor] = useState(null);
    
    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }

    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }

    function dropProfMenu() {
        return (
            <Box>
                <Button sx={{ color: "white", my: 2,}}>
                    Professores
                </Button>
                <Menu
                    anchorEl={ anchorElProfessor }
                    open={ Boolean(anchorElProfessor) }
                    onClose={ handleCloseAnchorElProfessor }
                >
                    <MenuItem
                        onClick = {
                            () => {
                                handleCloseAnchorElProfessor()
                                alert("Indo para a página de cadastros")
                            }
                        }
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem>
                        Listar
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar
                    sx={{
                        display: {xs:"none", md:"flex", mr:1},
                    }}
                >
                    <AdbIcon sx={{ display:"flex", mr:1 }} />
                    <Typography
                        variant="h5"
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".2rem",
                            fontWeight: "bold",

                        }}
                    >
                        CRUD - MUI - V0
                    </Typography>
                    
                    <Box
                        sx={{
                            display: "flex",
                            marginLeft: "auto",
                            justifyContent: "flex-end",
                        }}
                        onClick={ handleOpenAnchorElProfessor }
                    >
                        { dropProfMenu() }
                        <Button sx={{ color: "white", my: 2,}}>
                            Alunos
                        </Button>
                        <Button sx={{ color: "white", my: 2,}}>
                            Sobre
                        </Button>
                    
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MyMenu