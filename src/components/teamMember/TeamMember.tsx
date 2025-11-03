import { Card } from "../../components/teamMember/card.tsx";

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  image: string;
}

const TeamMember = ({ name, position, description, image }: TeamMemberProps) => {
  return (
    // <Card className="overflow-hidden border-border bg-team-card hover:shadow-lg transition-all duration-300">
    
    //   <div className="p-6 space-y-4">
    //     <div>
    //       <h3 className="text-xl font-bold text-team-name mb-1">{name}</h3>
    //       <p className="text-base font-semibold text-team-position">{position}</p>
    //     </div>
    //     <div className="p-4 rounded-lg bg-team-description border border-team-border">
    //       <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    //     </div>
    //   </div>
    // </Card>
    <Card className="overflow-hidden border-border bg-team-card hover:shadow-lg transition-all duration-300 
                 bg-gradient-to-br from-white to-purple-100 
                 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-200">
  
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-team-name mb-1">{name}</h3>
          <p className="text-base font-semibold text-team-position">{position}</p>
        </div>
        <div className="p-4 rounded-lg bg-team-description border border-team-border 
                       transition-all duration-300 
                       bg-gradient-to-r from-gray-50 to-white
                       hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 
                       hover:border-blue-200 cursor-pointer">
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default TeamMember;


// import { Card } from "../../components/teamMember/card.tsx";

// interface TeamMemberProps {
//   name: string;
//   position: string;
//   description: string;
//   image: string;
// }

// const TeamMember = ({ name, position, description, image }: TeamMemberProps) => {
//   return (
//     <Card className="overflow-hidden border-border bg-team-card hover:shadow-lg transition-all duration-300">
//       {/* <div className="aspect-square overflow-hidden bg-muted">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div> */}
//       <div className="p-6 space-y-4">
//         <div>
//           <h3 className="text-xl font-bold text-team-name mb-1">{name}</h3>
//           <p className="text-base font-semibold text-team-position">{position}</p>
//         </div>
//         <div className="p-4 rounded-lg bg-team-description border border-team-border">
//           <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default TeamMember;




