const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {createPages} = actions
    const productTemplate = path.resolve(`src/templates/Product.js`)

    
}