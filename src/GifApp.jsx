import { useState } from "react"
import { AddCategory, GifGrid, Header } from "./components"
import { ImageList } from "@mui/material"

export const GifApp = () => {
    
    const [ categories, setCategories ] = useState([])

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory ) ) return      // avoid repeating categories
        setCategories( [ newCategory, ...categories ] )
    }

    return (
        <>
            <Header />
            
            <AddCategory
                onNewCategory = { onAddCategory }    // { (value) => onAddCategory(value) }
            />

            <ImageList variant="masonry" cols={4} gap={8}>
                {
                    categories.map( (category) => (
                        <GifGrid
                            key      = { category }
                            category = { category }
                        />
                    ))
                }               
            </ImageList>


        </>
    )
}