import { useState } from 'react/cjs/react.development';
import styles from './Hello.module.css';

export default function Hello() {
  const [name, setName] = useState('재민');

  return (
    <>
      <p>Hello</p>
      <p>{name}</p>
      <button
        onClick={() => {
          setName(name === '재민' ? '민재' : '재민');
        }}
      >
        버튼
      </button>
    </>
  );
}
