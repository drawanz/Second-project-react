import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// eslint-disable-next-line no-unused-vars
import AppCss from './components/componentsCss/AppCss.css';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validationCheck = this.validationCheck.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);
    this.deleteButton = this.deleteButton.bind(this);

    this.state = {
      cardName: 'Harry Potter',
      cardDescription: 'Aquele que derrotou Você Sabe Quem',
      cardAttr1: '1',
      cardAttr2: '1',
      cardAttr3: '1',
      cardImage: 'https://i.pinimg.com/236x/dc/37/46/dc3746073ba303585e2b63d38d62bd90.jpg',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      dates: [],
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  handleHasTrunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), () => this.validationCheck());
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, hasTrunfo, cardTrunfo } = this.state;
    const objectDates = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      cardTrunfo,
    };

    this.handleHasTrunfo();

    this.setState((prevState) => ({
      dates: [...prevState.dates, objectDates],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  }

  deleteButton(e) {
    const { dates, cardTrunfo } = this.state;
    const t = dates.filter((item) => item
      !== dates[e.target.parentNode.parentNode.parentNode.id]);

    this.setState({
      dates: t,
    });
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: false,
        cardTrunfo: false,
      });
    }
  }

  validationCheck() {
    const maxValue = 90;
    const minValue = 0;
    const sumValue = 210;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;
    const atributte1 = parseInt(cardAttr1, 10);
    const atributte2 = parseInt(cardAttr2, 10);
    const atributte3 = parseInt(cardAttr3, 10);
    const sumAttributs = atributte1 + atributte2 + atributte3;
    if (
      cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || cardAttr1 < minValue
      || cardAttr1 > maxValue
      || cardAttr2 < minValue
      || cardAttr2 > maxValue
      || cardAttr3 < minValue
      || cardAttr3 > maxValue
      || sumAttributs > sumValue) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      dates,
      filterName,
      filterRare,
      filterTrunfo } = this.state;

    return (
      <div className="container">
        <div className="form">
          <Form
            hasTrunfo={ hasTrunfo }
            dates={ dates }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            filterName={ filterName }
            filterRare={ filterRare }
            filterTrunfo={ filterTrunfo }
          />

          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>

        <div className="container-filter">
          <Filter
            onInputChange={ this.onInputChange }
            filterName={ filterName }
            filterRare={ filterRare }
            filterTrunfo={ filterTrunfo }
          />
        </div>

        <div className="saved-items">
          {dates.filter((item) => item.cardName.includes(filterName))
            .filter((item) => {
              if (filterRare === 'todas') return true; // esse "return true" eu aprendi olhando o código do nosso colega Heitor Tessaro, turma 19 C
              return item.cardRare === filterRare;
            })
            .filter((item) => {
              if (filterTrunfo) return item.cardTrunfo === true;
              return true;
            })
            .map((card, index) => (
              <div key={ index } id={ index }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                  dates={ dates }
                  deleteButton={ this.deleteButton }
                />
              </div>))}
        </div>
      </div>
    );
  }
}

export default App;
