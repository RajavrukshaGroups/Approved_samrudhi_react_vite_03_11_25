import React from "react";

const icons = {
  house: <svg>{/* SVG CODE */}</svg>,
  building: <svg>{/* ... */}</svg>,
  battery: <svg>{/* ... */}</svg>,
  sun: <svg>{/* ... */}</svg>,
};

const InvestorCard = ({ card, onReadMore }) => (
  <article className="min-w-[280px] flex-1 rounded-[28px] bg-[#18473F] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
    <div className="flex items-center justify-center">{icons[card.icon]}</div>
    <h3 className="mt-6 text-center text-2xl font-extrabold leading-snug text-[#F3C64E]">{card.title}</h3>
    <p className="mt-4 text-center text-base leading-relaxed text-white/85">{card.description}</p>
    <div className="mt-8 flex justify-center">
      <button
        onClick={() => onReadMore(card)}
        className="inline-flex items-center rounded-full bg-[#F3C64E] px-6 py-3 font-semibold text-[#18473F] shadow hover:bg-[#e2b843]"
      >
        Read More <span className="ml-2">→</span>
      </button>
    </div>
  </article>
);

export default InvestorCard;
