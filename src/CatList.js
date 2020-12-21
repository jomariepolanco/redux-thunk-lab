// write your CatList component here
import React from 'react'

class CatList extends React.Component{

    renderCats = () => {
        return this.props.catPics.map(cat => <img alt="catpic" src={cat.url} />)
    }

    render(){
        console.log(this.props.catPics)
        return(
            <div>
                {this.renderCats()}
            </div>
        )
    }
}

export default CatList