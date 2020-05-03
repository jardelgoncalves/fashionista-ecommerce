import React from 'react';
import PropTypes from 'prop-types';

import { RaisedButton } from '../Button';
import ListSize from '../ListSize';

const Product = ({
  name,
  color,
  image,
  actual_price,
  discount_percentage,
  installments,
  sizes = [],
  loading,
  onSelectSize,
  addToCart,
  error,
}) => {
  return (
    <div className="product">
      <figcaption className="product__image">
        {Boolean(discount_percentage) && (
          <span className="product__promo">{discount_percentage}</span>
        )}
        <img
          src={
            image ||
            'https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível'
          }
          alt={name}
        />
      </figcaption>
      <div className="product__info">
        <h3 className="product__info__name">{name}</h3>
        <div className="price__container">
          <span className="info__price">{actual_price}</span>
          {Boolean(installments) && (
            <span className="info__installments">em até {installments}</span>
          )}
        </div>
        <div className="size__container">
          <span className="size__title">Escolha o tamanho</span>
          {Boolean(error) && <span className="size__error">{error}</span>}
          <ListSize options={sizes} onClick={onSelectSize} />
        </div>
        <RaisedButton
          text="Adicionar à Sacola"
          className="button--shadow"
          onClick={() =>
            addToCart({
              name,
              color,
              image,
              actual_price,
              discount_percentage,
              installments,
            })
          }
          loading={loading}
        />
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  actual_price: PropTypes.string,
  discount_percentage: PropTypes.string,
  installments: PropTypes.string,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      available: PropTypes.bool,
      size: PropTypes.string,
      sku: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
  onSelectSize: PropTypes.func,
  addToCart: PropTypes.func,
  error: PropTypes.string,
};

Product.defaultProps = {
  image: '',
  name: '',
  color: '',
  actual_price: '',
  discount_percentage: '',
  installments: '',
  sizes: [],
  loading: false,
  onSelectSize: () => null,
  addToCart: () => null,
  error: '',
};

export default Product;
