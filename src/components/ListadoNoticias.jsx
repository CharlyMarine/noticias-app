import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'



const ListadoNoticias = () => {

    const {noticias, pagina, totalNoticias, handleChangePagina} = useNoticias()

    console.log("Pagina -> ", pagina)

    const totalPaginas = Math.ceil(totalNoticias / 20)

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>
        <Stack
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            sx={{
                marginY: 5
            }}
        >
            <Pagination
                count={totalPaginas}
                variant="outlined"
                color="primary" 
                onChange={handleChangePagina}
                page={pagina}
            />
        </Stack>
        
    </>
  )
}

export default ListadoNoticias
