"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Postulation() {
  const router = useRouter();
  const [piece, setPiece] = useState("");
  const [formData, setFormData] = useState({
    nomPrenom: "",
    cne: "",
    pieceNum: "",
    email: "",
    telephone: "",
    filiere: "",
    niveau: "",
    message: "",
  });

  const [files, setFiles] = useState({
    pieceIdentite: null,
    photo: null,
    releveeNote: null,
  });

  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState({});

  // Regex patterns
  const patterns = {
    nomPrenom: /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/,
    cne: /^[A-Z]\d{9}$/,
    cni: /^[A-Z]{1,2}\d{5,7}$/,
    passport: /^[A-Z]{2}\d{7}$/,
    permis: /^[A-Z]\d{6}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    telephone: /^(\+212|0)[5-7]\d{8}$/,
  };

  // Validation messages
  const validationMessages = {
    nomPrenom:
      "Le nom doit contenir entre 2 et 50 caractères (lettres uniquement)",
    cne: "Le CNE doit commencer par une lettre majuscule suivie de 9 chiffres (ex: M123456789)",
    cni: "Format CNI invalide (ex: AB123456)",
    passport: "Format passeport invalide (ex: PA1234567)",
    permis: "Format permis invalide (ex: P123456)",
    email: "Adresse email invalide",
    telephone:
      "Numéro de téléphone marocain invalide (ex: +212612345678 ou 0612345678)",
  };

  // Validate single field
  const validateField = (name, value) => {
    if (!value) {
      return "Ce champ est requis";
    }

    if (name === "pieceNum") {
      const pattern = patterns[piece];
      if (pattern && !pattern.test(value)) {
        return validationMessages[piece];
      }
      return "";
    }

    const pattern = patterns[name];
    if (pattern && !pattern.test(value)) {
      return validationMessages[name];
    }

    return "";
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Validate file
  const validateFile = (file, type) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = {
      pieceIdentite: [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ],
      photo: ["image/jpeg", "image/jpg", "image/png"],
      releveeNote: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
    };

    if (!file) {
      return "Veuillez sélectionner un fichier";
    }

    if (file.size > maxSize) {
      return "Le fichier ne doit pas dépasser 5 Mo";
    }

    if (!allowedTypes[type].includes(file.type)) {
      return type === "photo"
        ? "Format invalide. Accepté: JPG, PNG uniquement"
        : "Format invalide. Accepté: JPG, PNG, PDF";
    }

    return "";
  };

  // Handle file change
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateFile(file, type);
      setFileErrors((prev) => ({ ...prev, [type]: error }));

      if (!error) {
        setFiles((prev) => ({ ...prev, [type]: file }));
      } else {
        setFiles((prev) => ({ ...prev, [type]: null }));
        e.target.value = "";
      }
    }
  };

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "message") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    const newFileErrors = {};
    Object.keys(files).forEach((key) => {
      const error = validateFile(files[key], key);
      if (error) newFileErrors[key] = error;
    });

    setErrors(newErrors);
    setFileErrors(newFileErrors);

    if (
      Object.keys(newErrors).length === 0 &&
      Object.keys(newFileErrors).length === 0
    ) {
      const photoBase64 = await fileToBase64(files.photo);
      sessionStorage.setItem(
        "postulationData",
        JSON.stringify({
          ...formData,
          pieceType: piece,
          photo: photoBase64,
          date: new Date().toLocaleDateString("fr-FR"),
        })
      );

      router.push("/admissions/postulation/download");

    }
  };


  // Get field status icon
  const getFieldStatus = (fieldName) => {
    if (!formData[fieldName]) return null;
    if (errors[fieldName]) {
      return <XCircle className="w-5 h-5 text-red-500" />;
    }
    return <CheckCircle className="w-5 h-5 text-green-500" />;
  };

  // Get file status
  const getFileStatus = (fileType) => {
    if (!files[fileType]) return null;
    if (fileErrors[fileType]) {
      return <XCircle className="w-5 h-5 text-red-500" />;
    }
    return <CheckCircle className="w-5 h-5 text-green-500" />;
  };
  

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Formulaire de Postulation
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Postulation aux concours pour l'accès à l'ESTM
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm space-y-6"
        >
          {/* Nom et Prénom */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Nom et Prénom *
            </label>
            <div className="relative">
              <input
                type="text"
                name="nomPrenom"
                value={formData.nomPrenom}
                onChange={handleInputChange}
                placeholder="Votre nom complet"
                className={`w-full px-4 py-3 border ${
                  errors.nomPrenom
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg`}
              />
              <div className="absolute right-3 top-3">
                {getFieldStatus("nomPrenom")}
              </div>
            </div>
            {errors.nomPrenom && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.nomPrenom}
              </p>
            )}
          </div>

          {/* CNE */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              CNE (Code National d'Élève) *
            </label>
            <div className="relative">
              <input
                type="text"
                name="cne"
                value={formData.cne}
                onChange={handleInputChange}
                placeholder="Ex: M123456789"
                className={`w-full px-4 py-3 border ${
                  errors.cne
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg`}
              />
              <div className="absolute right-3 top-3">
                {getFieldStatus("cne")}
              </div>
            </div>
            {errors.cne && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.cne}
              </p>
            )}
          </div>

          {/* Pièce d'identité */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Pièce d'identité *
            </label>
            <select
              value={piece}
              onChange={(e) => {
                setPiece(e.target.value);
                setFormData((prev) => ({ ...prev, pieceNum: "" }));
                setErrors((prev) => ({ ...prev, pieceNum: "" }));
              }}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg"
            >
              <option value="">-- Choisir votre pièce d'identité --</option>
              <option value="cni">Carte Nationale d'Identité</option>
              <option value="passport">Passeport</option>
              <option value="permis">Permis de conduire</option>
            </select>

            {piece && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="space-y-4 mt-4"
              >
                {/* Numéro de la pièce */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {piece === "cni" && "Numéro de la Carte Nationale *"}
                    {piece === "passport" && "Numéro du Passeport *"}
                    {piece === "permis" && "Numéro du Permis de conduire *"}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="pieceNum"
                      value={formData.pieceNum}
                      onChange={handleInputChange}
                      placeholder={
                        piece === "cni"
                          ? "Ex: AB123456"
                          : piece === "passport"
                          ? "Ex: PA1234567"
                          : "Ex: P123456"
                      }
                      className={`w-full px-4 py-3 border ${
                        errors.pieceNum
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg`}
                    />
                    <div className="absolute right-3 top-3">
                      {getFieldStatus("pieceNum")}
                    </div>
                  </div>
                  {errors.pieceNum && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.pieceNum}
                    </p>
                  )}
                </div>

                {/* Upload pièce d'identité */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Copie de la pièce d'identité *
                  </label>
                  <div
                    className={`relative border-2 border-dashed ${
                      fileErrors.pieceIdentite
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    } rounded-lg p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
                  >
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={(e) => handleFileChange(e, "pieceIdentite")}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {files.pieceIdentite
                          ? files.pieceIdentite.name
                          : "Cliquez pour téléverser"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        JPG, PNG, PDF (max 5 Mo)
                      </p>
                    </div>
                    {getFileStatus("pieceIdentite") && (
                      <div className="absolute top-2 right-2">
                        {getFileStatus("pieceIdentite")}
                      </div>
                    )}
                  </div>
                  {fileErrors.pieceIdentite && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {fileErrors.pieceIdentite}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Photo d'identité */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Photo d'identité *
            </label>
            <div
              className={`relative border-2 border-dashed ${
                fileErrors.photo
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-lg p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
            >
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, "photo")}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {files.photo
                    ? files.photo.name
                    : "Cliquez pour téléverser votre photo"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  JPG, PNG uniquement (max 5 Mo)
                </p>
              </div>
              {getFileStatus("photo") && (
                <div className="absolute top-2 right-2">
                  {getFileStatus("photo")}
                </div>
              )}
            </div>
            {fileErrors.photo && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {fileErrors.photo}
              </p>
            )}
          </div>

          {/* Relevé de notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Relevé de notes *
            </label>
            <div
              className={`relative border-2 border-dashed ${
                fileErrors.releveeNote
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-lg p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors`}
            >
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, "releveeNote")}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {files.releveeNote
                    ? files.releveeNote.name
                    : "Cliquez pour téléverser votre relevé"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  JPG, PNG, PDF (max 5 Mo)
                </p>
              </div>
              {getFileStatus("releveeNote") && (
                <div className="absolute top-2 right-2">
                  {getFileStatus("releveeNote")}
                </div>
              )}
            </div>
            {fileErrors.releveeNote && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {fileErrors.releveeNote}
              </p>
            )}
          </div>

          {/* Niveau */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Niveau d'Accès *
            </label>
            <select
              name="niveau"
              value={formData.niveau}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg"
            >
              <option value="">-- Choisir le niveau --</option>
              <option value="1">1ère année</option>
              <option value="2">2ème année</option>
              <option value="licence">Licence</option>
            </select>
            {errors.niveau && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.niveau}
              </p>
            )}
          </div>

          {/* Filière */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Filière Souhaitée *
            </label>
            <select
              name="filiere"
              value={formData.filiere}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg"
            >
              <option value="">-- Choisir une filière --</option>
              <option value="GI">Génie Informatique</option>
              <option value="IATE">
                Intelligence Artificielle et Technologies Emergentess
              </option>
              <option value="DWM">Développement Web et Multimédia</option>
              <option value="GE">Génie Électrique</option>
              <option value="GTE">Génie Thermique et Energétique</option>
              <option value="GIM">Génie Industriel et Maintenance</option>
              <option value="GC">Génie Civil</option>
              <option value="TM">Techniques de Management</option>
              <option value="FBA">Finance, Banque & Assurance</option>
              <option value="TCC">
                Techniques Commercialisation et de Communication
              </option>
              <option value="PMD">Génie Électrique</option>
            </select>
            {errors.filiere && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.filiere}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Adresse Email *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="exemple@email.com"
                className={`w-full px-4 py-3 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg`}
              />
              <div className="absolute right-3 top-3">
                {getFieldStatus("email")}
              </div>
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Téléphone */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Numéro de Téléphone *
            </label>
            <div className="relative">
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="+212612345678 ou 0612345678"
                className={`w-full px-4 py-3 border ${
                  errors.telephone
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg`}
              />
              <div className="absolute right-3 top-3">
                {getFieldStatus("telephone")}
              </div>
            </div>
            {errors.telephone && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.telephone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Message (optionnel)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Informations complémentaires..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors rounded-lg resize-none"
            />
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold text-lg rounded-lg transition-colors"
            >
              Envoyer la Postulation
            </button>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              * Champs obligatoires - En soumettant ce formulaire, vous
              confirmez l'exactitude des informations fournies.
            </p>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
