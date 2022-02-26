import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validationCheck = this.validationCheck.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.handleHasTrunfo = this.handleHasTrunfo.bind(this);
    // this.validationHasTrunfo = this.validationHasTrunfo.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      dates: [],
    };
  }

  handleHasTrunfo() {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    // } else {
    //   this.setState({
    //     hasTrunfo: false,
    //   });
    }
  }

  onInputChange({ target }) {
    const { name } = target;
    console.log(name);
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), () => this.validationCheck());
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, hasTrunfo } = this.state;
    const objectDates = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
    };

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
    }));

    this.handleHasTrunfo();
  }

  validationCheck() {
    const maxValue = 90;
    const minValue = 0;
    const sumValue = 210;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, isSaveButtonDisabled } = this.state;
    console.log(isSaveButtonDisabled);
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
    // this.validationHasTrunfo();
  }

  // validationHasTrunfo() {
  //   const { hasTrunfo } = this.state;
  //   console.log(hasTrunfo);
  // }

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
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
    );
  }
}

export default App;
