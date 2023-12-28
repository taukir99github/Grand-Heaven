import FilterationDash from "./FilterationDash";
import PropertiesCard from "./PropertiesCard";

function Properties() {
  return (
    // <div className="flex gap-4 mt-4">
    <div className="bg-slate-100 flex gap-4 w-full p-8"> 
      <div className="w-[25%]">
        <FilterationDash />
        
      </div>
      <div className="flex gap-10 w-[75%] flex-wrap items-center justify-center">
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
        <PropertiesCard/>
      </div>
     
    </div>
  );
}

export default Properties;
