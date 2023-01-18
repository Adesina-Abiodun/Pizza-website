import React from 'react'
// import { ProductsData as data } from './data'
import { 
        ProductsContainer, 
        ProductsHeading, 
        ProductWrapper, 
        ProductCard, 
        ProductImg, 
        ProductInfo,
        ProductTitle,
        ProductDesc,
        ProductPrice,
        ProductButton
    } from './ProductsElements'


const Products = ({Heading, data}) => {
  return (
        <ProductsContainer>
            <ProductsHeading>{Heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>

    )
}

export default Products