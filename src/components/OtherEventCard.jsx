// const OtherEventCard = (props) => {
//   return (
//     <div className="relative flex flex-col border-gray-300 border-[1px] rounded-lg">
//       <div className="h-[200px]">
//         <img
//           src={`https://savefiles.org/${props.event.image}?shareable_link=286`}
//           alt={props.event.title}
//           style={{ width: "100%", height: "200px" }}
//           className="rounded-t-lg"
//         />
//       </div>
//       <div className="flex flex-col gap-2 p-2">
//         <h4 className="text-xl text-gray-700 font-semibold truncate">
//           {props.event.title}
//         </h4>
//         <div className="flex">
//           <p className="text-gray-400 text-sm">
//             {props.event.date} {props.event.time}
//           </p>
//           <p className="text-gray-400 text-sm">@ {props.event.location}</p>
//         </div>
//         <div className="flex gap-4 align-middle items-center my-2">
//           {props.event.genres.map((genre, i) => (
//             <span
//               key={i}
//               className="p-1 border-[1px] text-sm text-secondary rounded-lg border-secondary"
//             >
//               {genre}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtherEventCard;
