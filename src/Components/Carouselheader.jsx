
const Slider = () => {
  const items = [
    "slider1_1.png", "slider1_2.png", "slider1_3.png", "slider1_4.png", 
    "slider1_5.png", "slider1_6.png", "slider1_7.png", "slider1_8.png", 
    "slider1_9.png", "slider1_10.png"
  ];

  return (
    <main className="w-[min(1200px,90vw)] mx-auto">
      <div className="slider w-full h-[50px] overflow-hidden relative">
        <div className="list flex w-full min-w-[calc(100px*10)]">
          {items.map((item, index) => (
            <div
              key={index}
              className="item absolute left-full animate-[autoRun_10s_linear_infinite] transition-all filter duration-500"
              style={{
                animationDelay: `${(10 / items.length) * index - 10}s`,
                width: '100px',
                height: '50px',
              }}
            >
              <img src={`images/${item}`} alt="" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Slider;
