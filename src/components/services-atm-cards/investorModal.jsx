import React from "react";

const InvestorModal = ({ open, onClose, card }) => {
 if (!open || !card) return null;

     return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 min-w-[300px] shadow-xl relative max-w-lg">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-600 font-bold text-2xl"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p>{card.modalContent}</p>
          </div>
        </div>
      );
};

export default InvestorModal;
