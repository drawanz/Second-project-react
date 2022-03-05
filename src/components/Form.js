/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import FormCss from './componentsCss/FormCss.css';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      dates,
      filterRare,
      filterName,
      filterTrunfo,
    } = this.props;
    console.log(cardName);
    return (
      <div className="div-form">
        <h4>Adicionar nova carta</h4>
        <form>
          <div className="div-description">
            <label htmlFor="nameInput">
              Nome
              <input
                id="nameInput"
                name="cardName"
                type="text"
                data-testid="name-input"
                // placeholder="Placeholder"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="descriptionInput">
              Descrição
              <textarea
                name="cardDescription"
                id="descriptionInput"
                type="text"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="div-atributos">
            <label htmlFor="atributoInput1">
              Atributo 1
              <input
                name="cardAttr1"
                id="atributoInput1"
                placeholder="0 a 90 pontos"
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                min={ 0 }
                max={ 90 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="atributoInput2">
              Atributo 2
              <input
                name="cardAttr2"
                id="atributoInput2"
                placeholder="0 a 90 pontos"
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                min={ 0 }
                max={ 90 }
                onChange={ onInputChange }
              />
            </label>

            <label htmlFor="atributoInput3">
              Atributo 3
              <input
                name="cardAttr3"
                id="atributoInput3"
                placeholder="0 a 90 pontos"
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                min={ 0 }
                max={ 90 }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="div-imagem">
            <label htmlFor="imageInput">
              Adicione uma imagem(URL):
              <input
                name="cardImage"
                id="imageInput"
                type="text"
                data-testid="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <div className="div-raridade">
            <label htmlFor="rareInput">
              Raridade:
              <select
                name="cardRare"
                id="rareInput"
                type="text"
                data-testid="rare-input"
                value={ cardRare }
                onChange={ onInputChange }
              >
                <option value="normal">normal</option>
                <option value="raro">raro</option>
                <option value="muito raro">muito raro</option>
              </select>
            </label>
          </div>

          <div className="div-superTrunfo">
            {hasTrunfo && dates.find((item) => item.cardTrunfo === true) ? (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            ) : (
              <label htmlFor="SuperTrunfo">
                <input
                  name="cardTrunfo"
                  id="SuperTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </label>
            )}
          </div>

          <div className="div-button">
            <button
              type="button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>

        <div className="div-filtros">
          <h6>Filtros de busca:</h6>
          <input
            id="nameFilter"
            name="filterName"
            type="text"
            data-testid="name-filter"
            placeholder="Nome da carta"
            value={ filterName }
            onChange={ onInputChange }
          />
          <select
            name="filterRare"
            data-testid="rare-filter"
            type="text"
            placeholder="Raridade"
            value={ filterRare }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <label htmlFor="filterTrunfo">
            <input
              name="filterTrunfo"
              id="filterTrunfo"
              type="checkbox"
              data-testid="trunfo-filter"
              checked={ filterTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
