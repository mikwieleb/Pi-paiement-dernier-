import React from 'react';
import { Pi } from 'pi-sdk'; // Si tu utilises un SDK Pi

const PiPaymentButton = () => {
  const handlePayment = () => {
    // Code pour initialiser et valider le paiement
    Pi.pay(0.001)
      .then(response => {
        console.log('Paiement réussi :', response);
      })
      .catch(error => {
        console.error('Erreur de paiement :', error);
      });
  };

  return (
    <button onClick={handlePayment}>Payer 0.001 Pi</button>
  );
};

export default PiPaymentButton;
