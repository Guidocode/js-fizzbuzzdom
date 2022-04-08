/*
  **Consegna:**
  Scrivi un programma che stampi in console i numeri da 1 a 100.

  **MILESTONE 1**
  Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

  **MILESTONE 2**
  Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

  **MILESTONE 3**
  Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i 
  multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

*/

// Consegna

// salvo il container in una const
const container = document.querySelector('.gb-container');

// stabilisco il numero di iterazioni
const limit = 100;

// Multipli
const mult3 = 3;
const mult5 = 5;

// effettuo il cliclo in base a quante sono le iterazioni
for (let i=1; i <= limit; i++){

  // creo l'elemento da aggiungere
  const boxElement = document.createElement('div');
  // gli scrivo la classe
  boxElement.className = 'box';
  // aggiungo il contenuto (in questo caso l'ho aggiunto nella condizione)
  // boxElement.append(i);
  // stampo in console per vederlo
  console.log(boxElement);

  
  // Se multiplo sia di 3 che di 5 stampo fizzbuzz
  if(!(i % mult3) && !(i % mult5)){
    boxElement.classList.add('bg-fizzbuzz');
    boxElement.append('fizzbuzz');
  
  // Se multiplo di 5 stampo buzz
  }else if(!(i % mult5)){
    boxElement.classList.add('bg-buzz');
    boxElement.append('buzz');
  // Se multiplo di 3 stampo fizz
  }else if(!(i % mult3)){
    boxElement.classList.add('bg-fizz');
    boxElement.append('fizz');
  // Altrimenti stampo il numero
  }else{
    boxElement.append(i);
  }

  // lo aggiungo al contenitore
  container.append(boxElement);
};

/* 
  Reminder: L'ORDINE DI SCRITTURA DEL CODICE FA LA DIFFERENZA
  Scrivere le condizioni "dall'insieme" più grande al più piccolo
*/