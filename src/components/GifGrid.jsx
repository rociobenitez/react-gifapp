import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import { ImageItem } from '.';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>  
            {
                isLoading && ( <h3>Cargando...</h3> )
            }
            {
                images.map( image => (
                    <ImageItem
                        key = { image.id }
                        { ...image }
                    />
                ))
            }
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}