import React, { useState } from "react";
import "../App.css";

export const Calendar = () => {
  const [flippedDoors, setFlippedDoors] = useState(Array(24).fill(false));

  const handleFlip = (index) => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    if (dayOfMonth >= index + 1) {
      const newFlippedDoors = [...flippedDoors];
      newFlippedDoors[index] = !newFlippedDoors[index];
      setFlippedDoors(newFlippedDoors);
    }

    const openDoor = doors.map((door) => door, index + 1());
  };

  const doors = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23];

  return ( <><div className="calendar">
    {doors.map((door) => 
      <a
        onClick={(e) => {e.preventDefault();
          handleFlip(door);
        }}
      >
        <div className={`door ${flippedDoors[door] ? "flipped" : ""}`}>
          <img src={`src/assets/${door + 1}.png`} alt="" />
          <div className="door-number">{door + 1}</div>
          <a href="">
            <div className="back">open</div>
          </a>
        </div>
      </a>
    
    )}</div>
    </>
)};

{
  /* 
    //    <div className="calendar">
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(0); }}>
    //             <div className={`door ${flippedDoors[0] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/1.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(1); }}>
    //             <div className={`door ${flippedDoors[1] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/2.png" alt="" />
    //                 <div className="door-number">2</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(2); }}>
    //             <div className={`door ${flippedDoors[2] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/6.png" alt="" />
    //                 <div className="door-number">3</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(3); }}>
    //             <div className={`door ${flippedDoors[3] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/4.png" alt="" />
    //                 <div className="door-number">4</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(4); }}>
    //             <div className={`door ${flippedDoors[4] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/5.png" alt="" />
    //                 <div className="door-number">5</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(5); }}>
    //             <div className={`door ${flippedDoors[5] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/3.png" alt="" />
    //                 <div className="door-number">6</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(6); }}>
    //             <div className={`door ${flippedDoors[6] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/7.png" alt="" />
    //                 <div className="door-number">7</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(7); }}>
    //             <div className={`door ${flippedDoors[7] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/8.png" alt="" />
    //                 <div className="door-number">8</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(8); }}>
    //             <div className={`door ${flippedDoors[8] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/9.png" alt="" />
    //                 <div className="door-number">9</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(9); }}>
    //             <div className={`door ${flippedDoors[9] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/10.png" alt="" />
    //                 <div className="door-number">10</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(10); }}>
    //             <div className={`door ${flippedDoors[10] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/29.png" alt="" />
    //                 <div className="door-number">11</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(11); }}>
    //             <div className={`door ${flippedDoors[11] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/12.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(12); }}>
    //             <div className={`door ${flippedDoors[12] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/25.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(13); }}>
    //             <div className={`door ${flippedDoors[13] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/14.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(14); }}>
    //             <div className={`door ${flippedDoors[14] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/15.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(15); }}>
    //             <div className={`door ${flippedDoors[15] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/16.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(16); }}>
    //             <div className={`door ${flippedDoors[16] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/17.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(17); }}>
    //             <div className={`door ${flippedDoors[17] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/18.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(18); }}>
    //             <div className={`door ${flippedDoors[18] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/19.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(19); }}>
    //             <div className={`door ${flippedDoors[19] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/20.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(20); }}>
    //             <div className={`door ${flippedDoors[20] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/21.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(21); }}>
    //             <div className={`door ${flippedDoors[21] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/22.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(22); }}>
    //             <div className={`door ${flippedDoors[22] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/23.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
    //         <a onClick={(e) => { e.preventDefault(); handleFlip(23); }}>
    //             <div className={`door ${flippedDoors[23] ? 'flipped' : ''}`}>
    //                 <img src="src/assets/24.png" alt="" />
    //                 <div className="door-number">1</div>
    //                 <a href=""><div className="back red">open</div></a>
    //             </div>
    //         </a>
        
    // </div> */
}
