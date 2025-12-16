"use client";

import { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";

export default function downloadPage() {
  const pdfRef = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("postulationData");
    if (stored) setData(JSON.parse(stored));
  }, []);

  const downloadPDF = () => {
    html2pdf()
      .from(pdfRef.current)
      .set({
        margin: 10,
        filename: "postulation-estm.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { format: "a4", orientation: "portrait" },
      })
      .save();
  };

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div
          ref={pdfRef}
          className="bg-white text-black p-10 w-[210mm] min-h-[297mm]"
        >
          <div className="flex justify-between h-16 items-start mb-8 ">
            <img
              src="/icons/mainLogo.png"
              alt="ESTM Logo"
              className="h-16 object-contain"
            />
            <img
              src={data.photo}
              alt="Photo d'identité"
              className="h-36 w-30 mt-40 object-cover border border-black"
            />
          </div>

          {/* REST OF PDF CONTENT */}
          <h1 className="text-xl font-bold text-center mb-6">
            Formulaire de Postulation
          </h1>

          <img src={data.piece} alt="" />
          <p>
            <b>Nom et Prénom :</b> {data.nomPrenom}
          </p>
          <p>
            <b>CNE :</b> {data.cne}
          </p>
          <p>
            <b>Pièce d'identité :</b> {data.pieceType?.toUpperCase()}
          </p>
          <p>
            <b>Numéro de la pièce :</b> {data.pieceNum}
          </p>
          <p>
            <b>Email :</b> {data.email}
          </p>
          <p>
            <b>Téléphone :</b> {data.telephone}
          </p>
          <p>
            <b>Filière :</b> {data.filiere}
          </p>
          <p>
            <b>Année :</b> {data.niveau}
          </p>

          {data.message && (
            <>
              <h2 className="mt-4 font-semibold">Message :</h2>
              <p>{data.message}</p>
            </>
          )}

          <div className="mt-10 text-sm">
            <p>
              Généré le <b>{data.date}</b>
            </p>
            <p className="mt-6">
              Signature du candidat : _______________________
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={downloadPDF}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg"
          >
            Télécharger le PDF
          </button>
        </div>
      </div>
    </div>
  );
}
