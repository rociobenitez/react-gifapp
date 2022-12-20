import { ImageListItem } from '@mui/material';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>  
            {
                isLoading && ( <h3>Cargando...</h3> )
            }
            {
                images.map( ({ id, title, url }) => (
                    <ImageListItem key = { id }>
                        <img
                            src      = { `${url}?w=164&h=164&fit=crop&auto=format` }
                            srcSet   = { `${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                            alt      = { title }
                            loading  = "lazy"
                        />
                    </ImageListItem>
                ))
            }
        </>
    )
}
