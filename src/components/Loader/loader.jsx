// import React from "react";
// import { Oval } from "react-loader-spinner";
// // import RRPL_logo from "../../components/assets/RRPL_loader-removebg-new.png";
// import RRPL_logo from "../../components/assets/Samrudhi_Logo.png";
// import "./loader.css";

// const Loader = ({ color = "#006400", secondaryColor = "#4fa94d", logo }) => {
//   return (
//     <div
//       className={`loader ${logo ? "loader-with-logo" : "loader-default-bg"}`}
//     >
//       {!!logo ? (
//         <div className="spinner-with-logo">
//           <img src={RRPL_logo} alt="rrpl_logo" className="loader-logo" />
        
//           <Oval
//             visible={true}
//             height="120"
//             width="120"
//             color="#006400"            // green ring color
//             secondaryColor="#006400"   // same green to remove the dual-tone effect
//             ariaLabel="oval-loading"
//             wrapperStyle={{ position: "absolute" }}
//             wrapperClass=""
//           />
//         </div>
//       ) : (
       
//         <Oval
//           visible={true}
//           height="120"
//           width="120"
//           color="#006400"            // green ring color
//           secondaryColor="#006400"   // same green to remove the dual-tone effect
//           ariaLabel="oval-loading"
//           wrapperStyle={{ position: "absolute" }}
//           wrapperClass=""
//         />
//       )}
//     </div>
//   );
// };

// export default Loader;


import React from "react";
import { Oval } from "react-loader-spinner";
import RRPL_logo from "../../components/assets/Samrudhi_Logo.png";
import "./loader.css";

const Loader = ({ color = "#FFC107", secondaryColor = "#FFD54F", logo }) => {
  return (
    <div
      className={`loader ${logo ? "loader-with-logo" : "loader-default-bg"}`}
    >
      {!!logo ? (
        <div className="spinner-with-logo">
          <img src={RRPL_logo} alt="rrpl_logo" className="loader-logo" />

          <Oval
            visible={true}
            height="120"
            width="120"
            color="#FFC107"            // ✨ light yellowish orange (amber)
            secondaryColor="#FFD54F"   // 🌟 soft pastel yellow-orange
            ariaLabel="oval-loading"
            wrapperStyle={{ position: "absolute" }}
            wrapperClass=""
          />
        </div>
      ) : (
        <Oval
          visible={true}
          height="120"
          width="120"
          color="#FFC107"            // ✨ light yellowish orange
          secondaryColor="#FFD54F"   // 🌟 lighter tone
          ariaLabel="oval-loading"
          wrapperStyle={{ position: "absolute" }}
          wrapperClass=""
        />
      )}
    </div>
  );
};

export default Loader;

