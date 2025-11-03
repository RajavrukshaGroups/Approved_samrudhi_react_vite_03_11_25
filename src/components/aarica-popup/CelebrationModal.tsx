// import { useEffect, useState } from 'react';
// import { X } from 'lucide-react';
// import Aarica1 from "../assets/aarica_samrudhi1.jpg"
// import Aarica2 from "../assets/aarica_samrudhi2.jpg"
// import Aarica3 from "../assets/aarica_samrudhi3.jpg"
// import Aarica4 from "../assets/aarica_samrudhi4.jpg"
// interface Confetti {
//   id: number;
//   left: number;
//   animationDuration: number;
//   size: number;
//   color: string;
//   rotation: number;
//   delay: number;
// }

// interface CelebrationModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CelebrationModal = ({ isOpen, onClose }: CelebrationModalProps) => {
//   const [confetti, setConfetti] = useState<Confetti[]>([]);

//   useEffect(() => {
//     if (isOpen) {
//       const colors = ['#EF4444', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6'];
//       const pieces: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
//         id: i,
//         left: Math.random() * 100,
//         animationDuration: 3 + Math.random() * 2,
//         size: 8 + Math.random() * 12,
//         color: colors[Math.floor(Math.random() * colors.length)],
//         rotation: Math.random() * 360,
//         delay: Math.random() * 0.5,
//       }));
//       setConfetti(pieces);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {confetti.map((piece) => (
//         <div
//           key={piece.id}
//           className="absolute animate-confetti-fall pointer-events-none"
//           style={{
//             left: `${piece.left}%`,
//             top: '-20px',
//             width: `${piece.size}px`,
//             height: `${piece.size}px`,
//             backgroundColor: piece.color,
//             animationDuration: `${piece.animationDuration}s`,
//             animationDelay: `${piece.delay}s`,
//             transform: `rotate(${piece.rotation}deg)`,
//             borderRadius: Math.random() > 0.5 ? '50%' : '0',
//             opacity: 0.8,
//           }}
//         />
//       ))}

//       <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-modal-appear">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 pointer-events-none" />

//         <div className="absolute inset-0 border-2 border-transparent rounded-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 pointer-events-none"
//              style={{
//                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                maskComposite: 'exclude',
//                padding: '2px'
//              }}
//         />

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
//         >
//           <X size={24} />
//         </button>

//         <div className="relative p-8 text-center">
//             <img src={Aarica1} alt="" />
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CelebrationModal;
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import Aarica1 from "../assets/aarica_samrudhi1.jpg";
import Aarica2 from "../assets/aarica_samrudhi2.jpg";
import Aarica3 from "../assets/aarica_samrudhi3.jpg";
import Aarica4 from "../assets/aarica_samrudhi4.jpg";
import { Link } from "react-router-dom";

interface Confetti {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  color: string;
  rotation: number;
  delay: number;
}

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CelebrationModal = ({ isOpen, onClose }: CelebrationModalProps) => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const location = useLocation();

  // 🖼️ Route → Image mapping
  const routeImageMap: Record<string, string> = {
    "/": Aarica1,
    "/home": Aarica1,
    "/about": Aarica2,
    "/projects": Aarica3,
    "/contact": Aarica4,
  };

  // 🧠 Get image based on current route
  const currentImage = routeImageMap[location.pathname] || Aarica1;

  // 🎊 Confetti animation setup
  useEffect(() => {
    if (isOpen) {
      const colors = ['#EF4444', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6'];
      const pieces: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        size: 8 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        delay: Math.random() * 0.5,
      }));
      setConfetti(pieces);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall pointer-events-none"
          style={{
            left: `${piece.left}%`,
            top: '-20px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            opacity: 0.8,
          }}
        />
      ))}

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-modal-appear">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* 🖼️ Dynamic Image Based on Route */}
   {/* <Link to="/plumeria">
  <div className="relative p-4 text-center cursor-pointer hover:scale-105 transition-transform duration-300">
    <img
      src={currentImage}
      alt="Celebration Banner"
      className="rounded-xl w-full object-cover"
    />
  </div>
</Link> */}
  <Link 
      to="/aarika-project" 
      onClick={onClose} // ✅ Close modal when clicked
    >
      <div className="relative p-4 text-center cursor-pointer">
        <img
          src={currentImage}
          alt="Celebration Banner"
          className="rounded-xl w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Link>
      </div>
    </div>
  );
};

export default CelebrationModal;
