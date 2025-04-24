import React from "react";
import { Pi } from "pi-sdk"; // Assurez-vous que le SDK Pi est bien installé et importé

const PiPaymentButton = () => {
  const handlePayment = async () => {
    try {
      const paymentResponse = await Pi.pay(0.001); // S'assurer que la méthode est correcte
      console.log("Paiement effectué avec succès :", paymentResponse);
      // Logique à exécuter après un paiement réussi (ex: confirmation, redirection, etc.)
    } catch (error) {
      console.error("Erreur lors du paiement :", error);
    }
  };

  return <button onClick={handlePayment}>Payer 0.001 Pi</button>;
};

export default PiPaymentButton;
