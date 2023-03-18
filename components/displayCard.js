import RoundedButton from "./rounded-button";
export default function DisplayCard({ children, imageUrl }) {
    return (
      <div
          className={` border-slate-700 border-[1px] rounded-lg border-solid overflow-hidden block w-[400px] h-[250px] bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className=" relative h-full w-full backdrop-blur-[2px] transition-all">
            <div className="absolute text-white text-2xl font-bold m-5">{children}</div>
            <div className="absolute bottom-0 right-0">
            <RoundedButton>Check it out!</RoundedButton></div>
          </div>
        </div>
    );
  }
  