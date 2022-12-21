import { ImageListItem } from "@mui/material"
import PropTypes from 'prop-types'

export const ImageItem = ({ id, title, url }) => {
    return (
        <ImageListItem key = { id }>
            <img
                src      = { `${url}?w=164&h=164&fit=crop&auto=format` }
                srcSet   = { `${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x` }
                alt      = { title }
                loading  = "lazy"
            />
        </ImageListItem>
    )
}

ImageItem.propTypes = {
    id    : PropTypes.number,
    title : PropTypes.string.isRequired,
    url   : PropTypes.string.isRequired,
}