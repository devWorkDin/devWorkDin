import React from "react";
import Image from "next/image";
import "../styles/Process.css";
import { WhatsappLogo } from "@phosphor-icons/react";
function Process() {
  return (
    <div className="grid-process">
      <div className="grid-process-item">
        <div className="frame first">
        <Image
            src="./assets/svg/whatsapp.svg"
            alt="whatsapp"
            width={32}
            height={32}
          />
        </div>
        <h2>Réserver sur WhatsApp</h2>
        <p>Contactez nous via WhatsApp afin de programmer votre trajet</p>
      </div>
      <div className="grid-process-item second">
        <div className="frame second">
          <Image
            src="./assets/svg/notification.svg"
            alt="whatsapp"
            width={32}
            height={32}
          />
        </div>
        <h2>Confirmation Instantanée</h2>
        <p>
          Recevez une confirmation de votre réservation par email avec tous les
          détails de votre trajet.
        </p>
      </div>
      <div className="grid-process-item third">
        <div className="frame last">
        <Image
            src="./assets/svg/user-focus.svg"
            alt="whatsapp"
            width={32}
            height={32}
          />        </div>
        <h2>Service Personnalisé</h2>
        <p>
          Profitez d'un service personnalisé et de qualité pour tous vos
          déplacements.
        </p>
      </div>
    </div>
  );
}

export default Process;
