import { Container, Box, Button, Link, TextField, Typography } from '@mui/material'

const Signin = () => {
    
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 8,
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                > {/*colocar textos mais importantes}*/}
                    Signin 
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoFocus

                    label="Endereço de e-mail"
                    id = "email"
                    name = "email"
                    type = "email"
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth

                    label="Senha"
                    id = "password"
                    name = "password"   
                    type = "password"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3,mb: 2,
                    }}
                >
                    Sign In
                </Button>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Link
                        underline="none"
                        href="#"
                    >
                        Esqueceu a senha?
                    </Link>
                    <Link
                        underline="none"
                        href="#"
                    >
                        Não tem uma conta? Registre-se
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}

export default Signin