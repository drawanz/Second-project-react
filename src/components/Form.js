import React, { Component } from 'react';
import NameInput from './Name';
import DescriptionInput from './Description';
import Atributo from './Atributo';
import Image from './Image';
import Raridade from './Raridade';
import SuperTrunfo from './SuperTrunfo';
import Button from './Button';

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
          <SuperTrunfo />
          <Button />
        </form>
      </div>
    );
  }
}
