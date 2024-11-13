const MetricItem = (props) => {
  return (
    <div className="p-3 flex item flex-col gap-4 bg-[#c5e0b5] rounded-md">
      <p>{props.text}</p>
      <h1>{props.fig}</h1>
      <div>
        <div className="flex items-center gap-2 text-sm ">
          <div className="text-xl">{props.meterIcon}</div>
          {props.meterNum}
          <p>Vs last Month</p>
         <div className="flex justify-end  w-1/2">{props.waveIcon}</div> 
        </div>
      </div>
    </div>
  );
};

export default MetricItem;
