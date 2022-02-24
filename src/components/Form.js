import React, { Component } from 'react';
import NameInput from './Name';
import DescriptionInput from './Description';
import Atributo from './Atributo';
import Image from './Image';
import Raridade from './Raridade';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <NameInput />
          <DescriptionInput />
          <Atributo />
          <Image />
          <Raridade />
        </form>
      </div>
    );
  }
}
