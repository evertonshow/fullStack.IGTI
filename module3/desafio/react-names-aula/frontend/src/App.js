import React from 'react';
import Names from './components/Names';
import Name from './components/Name';

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function onlyVowelsFrom(text) {
  const newText = text
    .split('')
    .filter((char) => VOWELS.includes(char.toLowerCase()))
    .join('');

  return newText;
}

function onlyConsonantsFrom(text) {
  const newText = text
    .split('')
    .filter((char) => !VOWELS.includes(char.toLowerCase()))
    .join('');

  return newText;
}

export default function App() {
  const [allNames, setAllNames] = React.useState([]);
  const [namesToShow, setNamesToShow] = React.useState([]);
  const [nameCount, setNameCount] = React.useState(0);

  const [options, setOptions] = React.useState([
    {
      id: 'normal',
      description: 'Normal',
      toggled: true,
      callback: (item) => item,
    },
    {
      id: 'vowels',
      description: 'Vogais',
      toggled: false,
      callback: (item) => onlyVowelsFrom(item),
    },
    {
      id: 'consonants',
      description: 'Consoantes',
      toggled: false,
      callback: (item) => onlyConsonantsFrom(item),
    },
    {
      id: 'name_and_length',
      description: 'Nome + tamanho',
      toggled: false,
      callback: (item) => `${item} (${item.length})`,
    },
  ]);

  React.useEffect(() => {
    const fetchNames = async () => {
      const resources = await fetch('http://localhost:3001/names');
      const json = await resources.json();

      setAllNames(json);
    };

    fetchNames();
  }, []);

  React.useEffect(() => {
    const toggledOption = options.find((option) => option.toggled);
    const callbackToBeExecuted = toggledOption.callback;

    const newNamesToShow = allNames
      .filter((_, index) => index < nameCount)
      .map(callbackToBeExecuted);

    setNamesToShow(newNamesToShow);
  }, [nameCount, allNames, options]);

  const handleOptionsChange = ({ target }) => {
    const { id } = target;

    const newOptions = [...options];

    newOptions.forEach((option) => {
      // console.log(`${option.id} === ${id}`);
      option.toggled = option.id === id;
    });

    setOptions(newOptions);
  };

  return (
    <div className='container'>
      <h1 className='center'>React Names</h1>

      <div className='input-field'>
        <input
          id='inputCountNames'
          type='number'
          value={nameCount}
          onChange={({ target }) => setNameCount(Number(target.value))}
          min='0'
          max='1000'
        />
        <label htmlFor='inputCountNames' className='active'>
          Quantidade de nomes:
        </label>
      </div>

      {options.map(({ id, description, toggled }) => {
        return (
          <label key={id}>
            <input
              id={id}
              name='radioGroupOptions'
              type='radio'
              checked={toggled}
              onChange={handleOptionsChange}
            />
            <span>{description}</span>
          </label>
        );
      })}

      <Names>
        {namesToShow.map((name, index) => {
          return <Name key={`${name}_${index}`}>{name}</Name>;
        })}
      </Names>
    </div>
  );
}
